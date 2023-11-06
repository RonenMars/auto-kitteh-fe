import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { AppWrapper } from '@components/templates';
import { ButtonsBar, JSONDisplay } from '@components/molecules';
import { Form } from '@components/molecules';
import isEqual from 'lodash/isEqual';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { PersistentStorage } from '@utils/localStorage/localStorage.ts';

import { initialContextDataType, TFieldsCollection, TJSONFormat } from '@app-types/index';
import { jsonToFormFields } from '@helpers/Form/jsonToFormFields';
import { exportData } from '@helpers/exportJSON';
import { loadData } from '@api/loadJSONFromFile';

/**
 * Initial data context shape.
 *
 * @typedef {Object} initialContextDataType
 * @property {TFieldsCollection} fields - Initial fields data.
 * @property {string} selectedProp - Selected property.
 * @property {TJSONFormat} data - Initial JSON data.
 * @property {Function} modifyData - Function to modify data.
 * @property {Function} setData - Function to set data.
 */
const initialContextData: initialContextDataType = {
  fields: {},
  selectedProp: '',
  data: {},
  modifyData: () => {},
  setData: () => {},
};

export const DataContext = createContext(initialContextData);

export const Home: React.FC = (): ReactNode => {
  const [data, setData] = useState({} as TJSONFormat);
  const [fields, setFields] = useState({} as TFieldsCollection);
  const [selectedProp, setSelectedProp] = useState<string | undefined>(undefined);

  // Load demo json from a local file
  const loadJSON = async () => {
    const JSONData = await loadData();
    setData(JSONData);
  };

  // On component load, check if we have the data from the previous visit if so, load from localStorage, otherwise load from the API
  useEffect(() => {
    const persistentData = PersistentStorage.getItem('json-data');
    if (persistentData) {
      if (!isEqual(persistentData, data)) {
        const parsedPersistentData = JSON.parse(persistentData);
        setData(parsedPersistentData);
      }
    } else {
      loadJSON();
    }
  }, []);

  // On change - re-create form fields / buttons and save the data to localStorage
  useEffect(() => {
    if (selectedProp !== '') {
      const newFields = jsonToFormFields(data, selectedProp as string);
      setFields(newFields);
    }
    PersistentStorage.setItem('json-data', JSON.stringify(data));
  }, [data]);

  // Reformat the data for a form fields format
  const constructFieldsByData = (fieldName: string) => {
    setSelectedProp(fieldName);
    const newFields = jsonToFormFields(data, fieldName);
    setFields(newFields);
  };

  // Update local state with a new data
  const modifyData = (newData: TJSONFormat, propertyInObj: string) => {
    if (data) {
      const manipulateData: TJSONFormat = data;
      const property = selectedProp || propertyInObj;
      manipulateData[property] = {
        ...(manipulateData[selectedProp || propertyInObj] as unknown as TJSONFormat),
        ...newData,
      };
      setData({ ...manipulateData });
    }
  };

  const clearSelection = () => setSelectedProp(undefined);

  return (
    <AppWrapper classes={['px-6', 'py-4']}>
      <button onClick={exportData}>
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Export JSON File
      </button>
      <div className="w-full flex flex-col mt-4">
        <DataContext.Provider
          value={{
            fields,
            selectedProp,
            data,
            modifyData,
            setData,
          }}
        >
          <div className="flex-1 scroll-auto overflow-auto">
            <JSONDisplay />
          </div>
          <div className="mt-4">
            <ButtonsBar
              data={data}
              constructFieldsByData={constructFieldsByData}
              selectedProp={selectedProp}
              clearSelection={clearSelection}
            />
          </div>
          <div className="flex-1 mt-4">{selectedProp ? <Form modifyData={modifyData} /> : null}</div>
        </DataContext.Provider>
      </div>
    </AppWrapper>
  );
};
