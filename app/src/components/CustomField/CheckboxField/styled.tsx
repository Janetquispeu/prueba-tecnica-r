import styled from 'styled-components';

export const CustomIcon = styled('span')(() => ({
  border: '1px solid #B1B3B9',
  borderRadius: 5,
  height: 20,
  width: 20,
  'input:hover ~ &': {
    backgroundColor: '#FFF',
  },
  'input:disabled ~ &': {
    background: '#F8F8F8',
    boxShadow: 'none',
    border: 'none'
  },
  'input:is(:checked):is([disabled]):hover ~ &': {
    background: '#B1B1B1',
    boxShadow: 'none'
  }
}));

export const CustomCheckedIcon = styled(CustomIcon)({
  backgroundColor: '#0A051E',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  border: '1px solid #0A051E',
  '&:before': {
    backgroundImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 8' width='9' height='8' fill='none'%3E%3Cpath"
    + " d='M8 1L3.18376 7L1 4.42857' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    content: '""',
    display: 'block',
    height: 18,
    width: 18,
  },
  'input:is(:checked):disabled ~ &': {
    background: '#B1B1B1',
    border: '1px solid #B1B1B1'
  },
  'input:is(:checked):hover ~ &': {
    backgroundColor: '#0A051E',
    boxShadow: '0px 6px 15px 0px rgba(54, 116, 246, 0.25)'
  }
});
