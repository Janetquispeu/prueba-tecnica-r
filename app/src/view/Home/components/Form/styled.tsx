import styled from 'styled-components';
import { device } from '@app/utils/variables';

export const Form = styled.form`
  a {
    color: #03050F;
    display: inline-block;
    margin: 15px 0;
    text-decoration: underline;
  }
  button {
    @media ${device.xl} {
      width: 336px;
    }
  }
`;

export const FieldWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  &.b-field-wrapper--margin {
    margin-top: 0;
  }
  &.MuiTypography-root {
    font-size: 12px;
  }
`;

export const Box = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 1px solid #03050F;
  border-left: 1px solid #03050F;
  border-radius: 8px;
  border-right: 1px solid #03050F;
  border-top: 1px solid #03050F;
  display: inline-flex;
  height: 56px;
  width: 100%;
  &.b-field-right {
    border-right: none;
    border-radius: 8px 0 0px 8px;
  }
  &.b-field-left {
    border-radius: 0 8px 8px 0;
  }
`;
