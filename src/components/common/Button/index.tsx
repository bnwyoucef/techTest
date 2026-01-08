import React from 'react';
import type { ButtonProps } from '@mui/material';
import { StyledButton } from './Button.styles';

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
