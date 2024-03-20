import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';

const FormControlStyle = styled(FormControl)(() => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#fff',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    height: '56px',
    lineHeight: 'normal',
    padding: '0 11px',
    '& .MuiInputBase-input': {
      padding: '0 !important'
    },
    '& fieldset': {
      border: 'none'
    }
  },
  '& .MuiFormLabel-root': {
    color: '#707070',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    transform: 'translate(14px, 11px) scale(1)',
    '&.Mui-error': {
      color: '#D32F2F'
    }
  },
  '& .MuiFormLabel-root.MuiInputLabel-shrink': {
    transform: 'translate(14px, -9px) scale(0.75)'
  }
}));

export const InputField = ({
  label,
  disabled,
  placeholder,
  multiline,
  required = true,
  rows,
  input,
  className,
  sx = { width: '100%' },
  size,
  meta: { touched, invalid, error },
  textIcon,
  helperTextInput,
  editForm = false,
  ...custom
}) => {
  const showError = editForm ? error : (touched && invalid);

  return (
    <FormControlStyle className={className} sx={sx}>
      <TextField
        id={showError ? 'standard-required' : 'outlined-error-helper-text'}
        variant="filled"
        label={label}
        placeholder={placeholder}
        error={showError}
        helperText={(showError && error) || (helperTextInput && helperTextInput)}
        required={required}
        disabled={disabled}
        multiline={multiline || false}
        rows={rows || ''}
        size={size}
        {...input}
        {...custom}
        sx={sx}
        focused
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {textIcon}
            </InputAdornment>
          )
        }}
      />
    </FormControlStyle>
  );
};
