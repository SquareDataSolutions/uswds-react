import React from 'react';
import Button from './Button';
import '../index';

interface BigButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const BigButton: React.FC<BigButtonProps> = ({ children, ...other }) => (
  <Button className={'usa-button usa-button--big'} {...other}>
    {children}
  </Button>
);

export default BigButton;
