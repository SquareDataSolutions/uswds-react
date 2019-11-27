import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { children, className, ...remainingProps } = props;
  return (
    <button
      id={remainingProps.id}
      disabled={remainingProps.disabled}
      name={remainingProps.name}
      type={remainingProps.type}
      value={remainingProps.value}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
