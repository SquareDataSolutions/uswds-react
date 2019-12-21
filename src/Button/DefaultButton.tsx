import React from 'react';
import Button from './Button';

interface DefaultButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  ...other
}) => (
  <Button className={'usa-button'} {...other}>
    {children}
  </Button>
);

export default DefaultButton;
