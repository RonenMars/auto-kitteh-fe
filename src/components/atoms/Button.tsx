import React, { MouseEventHandler, ReactNode } from 'react';

const Button = ({
  onClick,
  classname,
  key,
  children,
}: {
  classname: string;
  key?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) => {
  return (
    <button onClick={onClick} className={classname} key={key}>
      {children}
    </button>
  );
};

export default Button;
