import React from 'react';
import Button from './Button';

interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  ...other
}) => (
  <Button className={'usa-button usa-button--outline'} {...other}>
    {children}
  </Button>
);

export default OutlineButton;
