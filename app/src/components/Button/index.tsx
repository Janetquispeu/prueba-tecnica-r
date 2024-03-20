import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Props } from './model';
import { ButtonMaterialStyle, theme } from './styled';

export const Button = ({
  text,
  variant,
  disabled,
  className,
  startIcon,
  endIcon,
  type,
  color,
  sx,
  onClick
}: Props) => (
  <ThemeProvider theme={theme}>
    <ButtonMaterialStyle
      className={className}
      data-testid="button"
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type || 'button'}
      color={color}
      sx={sx}
      onClick={onClick}
    >
      {text}
    </ButtonMaterialStyle>
  </ThemeProvider>
);

Button.defaultProps = {
  color: 'primary'
};
