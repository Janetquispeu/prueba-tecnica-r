import styled from "styled-components"
import { device } from "@app/utils/variables";
import { images } from "@app/assets/images";

export const HomeStyle = styled.div`
  align-items: center;
  display: flex;
  height: calc(100% - 106px);
  justify-content: center;
  background: url(${images.blurAsset}) top left no-repeat,
    url(${images.blurAsset1}) top right no-repeat, #f8f9ff;
  background-size: contain;
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

export const LeftBox = styled.div`
  width: 50%;
  @media ${device.xl} {
    display: none;
  }
`;

export const RightBox = styled.div`
  width: 50%;
  h1 {
    color: #03050f;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }
  .b-wrapper-right-box {
    width: 352px;
  }
  .b-wrapper-title {
    display: flex;
    .b-wrapper-tag-promo {
      width: calc(100% - 136px);
    }
    @media ${device.xl} {
      margin-bottom: 15px;
    }
  }
  .b-wrapper-text {
    p {
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.2;
      line-height: 20px;
      margin: 10px 0;
    }
    @media ${device.xl} {
      hr {
        display: block;
      }
    }
  }
  .b-divider {
    display: none;
  }
  @media ${device.xl} {
    display: flex;
    justify-content: center;
  }
`;

export const ImageResponsive = styled.div`
  display: none;
  height: 160px;
  width: 136px;
  img {
    object-fit: contain;
    width: 100%;
  }
  @media ${device.xl} {
    display: block;
  }
`;
