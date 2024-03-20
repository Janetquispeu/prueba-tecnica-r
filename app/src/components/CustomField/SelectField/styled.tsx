import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

export const FormControlStyle = styled(FormControl)(() => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#fff',
    color: '#707070',
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
    transform: 'translate(14px, 11px) scale(1)'
  },
  '& .MuiFormLabel-root.MuiInputLabel-shrink': {
    transform: 'translate(14px, -9px) scale(0.75)'
  }
}));

export const menuPropsDefault = {
  PaperProps: {
    sx: {
      borderRadius: '5px',
      boxShadow: '0px 3px 14px 2px rgba(0,0,0,0.12)',
      maxHeight: '26vh',
      maxWidth: '26vh',
      '& .MuiMenuItem-root': {
        fontSize: '14px',
        textWrap: 'wrap'
      }
    }
  }
};
