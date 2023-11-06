import React, { ReactNode } from 'react';
import clsx from 'clsx';
type Props = {
  children: ReactNode;
  classes?: string[];
};

const AppWrapper: React.FC<Props> = ({ children, classes }) => {
  const baseClass = ['bg-white w-3/4 rounded-3xl shadow-lg py-8 px-14'];

  const wrapperClass = clsx(baseClass, classes);

  return (
    <div className="w-screen flex justify-center items-center">
      <div className={wrapperClass}>{children}</div>
    </div>
  );
};
export default AppWrapper;
