import React from 'react';

const Button = props => {
  const { disabled, name, onClick, type, children, ...remainingProps } = props;
  return (
    <button
      disabled={disabled}
      name={name}
      onClick={onClick}
      type={type}
      {...remainingProps}
    >
      {children}
    </button>
  );
};

export default Button;
