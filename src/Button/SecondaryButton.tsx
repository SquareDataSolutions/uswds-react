import React from 'react';
import Button from './Button';
import '../index';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, ...other }) => (
  <Button className={'usa-button usa-button--secondary'} {...other}>
    {children}
  </Button>
);

export default SecondaryButton;
