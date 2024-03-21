import styled from "styled-components"

export const CardStyle = styled.div`
  background-color: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 1px 24px rgba(174,172,243,0.25);
  padding: 30px 20px;
  position: relative;
  width: 256px;
`;

export const RadioWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .b-title {
    font-size: 20px;
    font-weight: 700;
  }
  .b-text {
    font-size: 12px;
  }
`;
