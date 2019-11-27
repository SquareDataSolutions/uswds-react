import React from 'react';
import Button from './Button';

interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string,
  children: string
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ className, children, ...other }) => (
  <Button className={className} {...other}>
    {children}
  </Button>
);

export default DefaultButton;