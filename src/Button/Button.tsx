import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { children, ...remainingProps } = props;
  return (
    <button
      id={remainingProps.id}
      disabled={remainingProps.disabled}
      name={remainingProps.name}
      type={remainingProps.type}
      value={remainingProps.value}
      className={remainingProps.className}
    >
      {children}
    </button>
  );
};

export default Button;
