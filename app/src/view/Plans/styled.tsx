import styled from "styled-components"

export const PlansStyle = styled.div`
  align-items: center;
  display: flex;
  height: calc(100% - 106px);
  justify-content: center;
  padding-top: 64px;
`;

export const LayoutContent = styled.section`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1530px;
`;

export const BoxWrapper = styled.div`
  h2 {
    font-size: 40px;
    margin-bottom: 15px;
  }
  .b-person {
    padding: 40px;
    margin: auto;
    max-width: 544px;
    text-align: center;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;

export const PlanCardWrapper = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 20px;
`;
