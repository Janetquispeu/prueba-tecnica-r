import styled from "styled-components"
import { device } from "@app/utils/variables";
import { images } from "@app/assets/images";

export const LeftBoxStyle = styled.div`
  width: 50%;
  @media ${device.xl} {
    display: none;
  }
`;
