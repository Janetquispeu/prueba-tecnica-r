import styled from "styled-components"
import { device } from "@app/utils/variables";

export const ResumeStyle = styled.div`
  align-items: center;
  display: flex;
  height: calc(100% - 106px);
  justify-content: center;
  padding-top: 64px;
  h2 {
    margin-top: 30px;
    font-size: 48px;
    margin-bottom: 50px;
  }
`;

export const LayoutContent = styled.section`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1530px;
`;

export const ResumeCardWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 1px 24px rgba(174,172,243,0.25);
  padding: 20px;
  width: 926px;
  .b-price-calculate-for {
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .b-text {
    font-size: 18px;
    &--bold {
      font-weight: 700;
    }
  }
`;

export const User = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px;
  .b-text-user {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const MiniBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px;
`;

