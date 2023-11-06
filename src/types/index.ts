import React from 'react';

export type TJSONFormat = Record<string, string | object>;
export type TModifyFunc = (newData: TJSONFormat, category: string) => void;

export type TForm = {
  modifyData: TModifyFunc;
};

export type TSingleField = {
  label: string;
  type: string;
  name: string;
  key: string;
  defaultValue: string;
  value: string;
  rules: {
    required: boolean;
  };
};

export type TFieldsCollection = Record<string, TSingleField>;

export type initialContextDataType = {
  data: TJSONFormat;
  fields?: Record<string, TSingleField>;
  modifyData: (newData: Record<string, string>, containingPropName: string) => void;
  setData: (newData: Record<string, string>) => void;
  selectedProp: string | undefined;
};

export type TInput = {
  value: string;
  onChange: (x: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  modifyData: TModifyFunc;
};
