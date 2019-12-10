import React from 'react';
import Button from './Button';
import '../index';

interface OutlineInverseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const OutlineInverseButton: React.FC<OutlineInverseButtonProps> = ({ children, ...other }) => (
  <Button className={'usa-button usa-button--outline usa-button--inverse'} {...other}>
    {children}
  </Button>
);

export default OutlineInverseButton;
