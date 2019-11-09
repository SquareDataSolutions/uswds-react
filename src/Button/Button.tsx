import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { children, ...remainingProps } = props;
  return (
    <button
      {...remainingProps}
    >
      {children}
    </button>
  );
};

export default Button;