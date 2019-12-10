import React from 'react';
import Button from './Button';
import '../index';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...other }) => (
  <Button className={'usa-button usa-button--base'} {...other}>
    {children}
  </Button>
);

export default BaseButton;
