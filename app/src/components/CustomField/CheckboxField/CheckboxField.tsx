import React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import { Props } from './model';
import { CustomCheckedIcon, CustomIcon } from './styled';

const CustomFormGroupStyle = styled(FormGroup)(() => ({
  display: 'flex',
  flexDirection: 'row',
  '& .MuiFormControlLabel-label': {
    color: '#707070',
    fontSize: '14px',
  }
}));

export const CheckboxField: React.FC<Props> = ({
  input: { onChange, name, value },
  meta: { touched, error },
  className,
  label,
  disabled,
  handleChange
}) => {
  const showError = Boolean(touched && error);

  const handleOnChange = (event) => {
    const { checked } = event.target;

    onChange(checked);
    handleChange && handleChange(checked);
  };

  return (
    <FormControl error={showError}>
      <CustomFormGroupStyle className={className}>
        <FormControlLabel
          label={label}
          control={(
            <Checkbox
              name={name}
              checked={Boolean(value)}
              onChange={handleOnChange}
              disabled={disabled}
              checkedIcon={<CustomCheckedIcon />}
              icon={<CustomIcon />}
            />
          )}
        />
      </CustomFormGroupStyle>
      {showError && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
