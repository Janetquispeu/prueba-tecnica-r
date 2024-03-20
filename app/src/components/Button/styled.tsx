import { createTheme, styled } from '@mui/material/styles';
import { Button as ButtonMaterial } from '@mui/material';
import { COLORS } from '../../ui/variables';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#03050F',
    }
  },
});

export const ButtonMaterialStyle = styled(ButtonMaterial)(() => ({
  borderRadius: '40px',
  boxShadow: 'none!important',
  color: '#fff',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '700',
  letterSpacing: 'normal',
  padding: '12px 15px',
  textAlign: 'center',
  height: '64px'
}));
