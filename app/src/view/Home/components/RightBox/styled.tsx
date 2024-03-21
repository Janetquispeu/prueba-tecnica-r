import styled from "styled-components"
import { device } from "@app/utils/variables";

export const RightBoxStyle = styled.div`
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
