import React from 'react';
import { TInput } from '@app-types/index.ts';

export const Input = ({ value, onChange, name, modifyData }: TInput) => {
  return (
    <input
      className="flex border-2 border-purple-500 rounded"
      onChange={(value) => {
        modifyData({ [name]: value.target.value }, name);
        return onChange(value);
      }}
      value={value}
    />
  );
};
