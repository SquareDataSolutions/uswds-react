import React from 'react';
import Button from './Button';
import '../index';

interface AccentCoolButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const AccentCoolButton: React.FC<AccentCoolButtonProps> = ({ children, ...other }) => (
  <Button className={'usa-button usa-button--accent-cool'} {...other}>
    {children}
  </Button>
);

export default AccentCoolButton;
