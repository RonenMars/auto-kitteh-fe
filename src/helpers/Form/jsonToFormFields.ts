import { TFieldsCollection, TJSONFormat } from '@app-types/index.ts';

export const jsonToFormFields = (data: TJSONFormat, fieldName: string) => {
  if (fieldName) {
    return Object.keys(data[fieldName]).reduce((acc: TFieldsCollection, currentKey: string) => {
      acc[currentKey] = {
        defaultValue: data[fieldName][currentKey as any],
        key: currentKey,
        label: currentKey,
        name: currentKey,
        rules: {
          required: true,
        },
        type: 'text',
        value: data[fieldName][currentKey as any],
      };
      return acc;
    }, {} as TFieldsCollection);
  }
  return {};
};
