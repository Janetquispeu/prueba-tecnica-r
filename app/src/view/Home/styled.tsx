import styled from "styled-components"
import { device } from "@app/utils/variables";
import { images } from "@app/assets/images";

export const LayoutStyle = styled.section`
  background: url(${images.blurAsset}) top left no-repeat,
    url(${images.blurAsset1}) top right no-repeat, #f8f9ff;
  background-size: contain;
  height: 100%;
`;

export const LayoutContent = styled.section`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1530px;
`;

export const HomeStyle = styled.div`
  align-items: center;
  display: flex;
  height: calc(100% - 106px);
  justify-content: center;
  height: 100%;
  @media ${device.xl} {
    background-size: cover;
  }
  .b-home--left div {
    margin: auto;
    height: 560px;
    width: 480px;
  }
  .b-home__image {
    width: 480px;
    height: 560px;
    img {
      object-fit: contain;
      width: 100%;
    }
  }
`;
