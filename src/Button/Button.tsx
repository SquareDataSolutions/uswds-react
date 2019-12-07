import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const {
    id,
    disabled,
    name,
    type,
    value,
    className,
    onClick } = props;

  return (
    <button
      id={id}
      disabled={disabled}
      name={name}
      type={type}
      value={value}
      className={className}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
