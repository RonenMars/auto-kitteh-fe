import React, { ReactNode } from 'react';
import { Button } from '@components/atoms';
import { TJSONFormat } from '@app-types/index.ts';

/**
 * ButtonsBar is a React component that displays a bar of buttons, allowing users to interact with the data.
 *
 * @component
 *
 * @param {Object} props - The component's props.
 * @param {TJSONFormat} props.data - The JSON data used to generate the buttons.
 * @param {function} props.constructFieldsByData - A callback function to construct form fields based on the selected data.
 * @param {function} props.clearSelection - A callback function to clear the selection of the selected prop.
 * @param {string} [props.selectedProp] - The currently selected property.
 *
 * @returns {ReactNode} A bar of buttons with dynamic behavior based on the provided props.
 */

export const ButtonsBar = ({
  data,
  constructFieldsByData,
  selectedProp,
  clearSelection,
}: {
  data: TJSONFormat;
  constructFieldsByData: (fieldName: string) => void;
  clearSelection: (objKey?: string) => void;
  selectedProp?: string;
}): ReactNode => {
  return (
    <div>
      {data &&
        Object.keys(data).map((objKey) => {
          return (
            <Button
              key={objKey}
              onClick={() => constructFieldsByData(objKey)}
              classname="bg-purple-500 hover:bg-purple-400 text-white font-bold py-1 px-4 m-4 border-b-4 border-purple-300 hover:border-purple-500 rounded"
            >
              {objKey}
            </Button>
          );
        })}
      {selectedProp !== undefined && (
        <Button
          classname="bg-purple-500 hover:bg-purple-400 text-white font-bold py-1 px-4 m-4 border-b-4 border-purple-300 hover:border-purple-500 rounded"
          onClick={clearSelection}
        >
          Close Form
        </Button>
      )}
    </div>
  );
};
