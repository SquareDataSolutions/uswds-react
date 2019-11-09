import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { disabled, onClick, type, children, ...remainingProps } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...remainingProps}
    >
      {children}
    </button>
  );
};


export default Button;