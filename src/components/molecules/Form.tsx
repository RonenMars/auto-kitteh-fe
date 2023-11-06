import React, { ReactNode, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DataContext } from '@components/pages/Home';
import { TForm } from '@app-types/index';
import { Input } from '@components/atoms';

/**
 * Form is a React component that renders a form based on the fields provided in the context.
 *
 * @component
 *
 * @param {TForm} props - The component's props.
 * @param {function} props.modifyData - A callback function to modify data based on user input.
 *
 * @returns {JSX.Element} A form component with dynamic fields based on the context data.
 */
export const Form = ({ modifyData }: TForm): ReactNode => {
  const { fields } = useContext(DataContext);

  const {
    control,
    formState: { errors },
  } = useForm();

  const formInputs = Object.keys(fields!).map((e) => {
    const { rules, defaultValue, label } = fields![e];

    return (
      <section key={e}>
        <label>{label}</label>
        <Controller
          control={control}
          defaultValue={defaultValue}
          name={e}
          render={({ field }) => <Input modifyData={modifyData} onChange={field.onChange} {...fields![e]} />}
          rules={rules}
        />
        {errors[e] ? <p>This field is required</p> : null}
      </section>
    );
  });
  return <form>{formInputs}</form>;
};
