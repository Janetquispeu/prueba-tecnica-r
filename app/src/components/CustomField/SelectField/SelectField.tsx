import React, { useEffect } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Props } from './model';
import { FormControlStyle, menuPropsDefault } from './styled';

export const SelectField: React.FC<Props> = ({
  label,
  listOptions,
  input: { onChange, value },
  meta: { touched, error },
  keyOption,
  labelOption,
  valueOption,
  disabled,
  onChangeSelect,
  objectKeyOption,
  className,
  sx = { width: '100%' },
  menuProps = menuPropsDefault
}) => {
  const showError = Boolean(touched && error);
  const [showSelect, setShowSelect] = React.useState(false);

  const handleChange = (event) => {
    const valueLabel = event.target.value as string;

    if (objectKeyOption) {
      const obj = listOptions.find((data) => data.id.toString() === valueLabel);
      onChangeSelect && onChangeSelect(obj);
    } else {
      onChangeSelect && onChangeSelect(valueLabel);
    }
    onChange(valueLabel);
  };

  const getStringValue = (valueString) => valueString.toString();

  const getStructureData = (data) => (data.map((item) => ({
    id: keyOption ? item[keyOption] : item.id,
    label: labelOption ? item[labelOption] : item.label,
    value: valueOption ? getStringValue(item[valueOption]) : item.value
  })));

  useEffect(() => {
    const handler = () => {
      setShowSelect(false);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <FormControlStyle
      sx={sx}
      error={showError}
      disabled={disabled}
      className={className}
    >
      <InputLabel id="b-library-select-field">{label}</InputLabel>
      <Select
        labelId="b-library-select-field"
        id="b-library-select-field"
        value={value}
        label={label}
        onChange={handleChange}
        sx={sx}
        MenuProps={menuProps}
        open={showSelect}
        onOpen={() => setShowSelect(true)}
        onClose={() => setShowSelect(false)}
      >
        {listOptions.length && getStructureData(listOptions).map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{error}</FormHelperText>}
    </FormControlStyle>
  );
};
