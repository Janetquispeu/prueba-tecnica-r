import styled from "styled-components"

export const GoBackWrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  span {
    color: #4F4FFF;
    font-size: 18px;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
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
