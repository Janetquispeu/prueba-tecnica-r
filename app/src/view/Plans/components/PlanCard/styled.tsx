import styled from "styled-components"

export const PlanCardStyle = styled.div`
  background-color: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 1px 24px rgba(174,172,243,0.25);
  padding: 60px 30px;
  position: relative;
  width: 288px;
  button {
    background-color: #f7052d;
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    position: absolute;
    bottom: 30px;
  }
`;

export const PlanTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  .b-tag {
    background-color: #7df0ba;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    padding: 5px;
    position: absolute;
    top: -30px;
    left: 0;
  }
`;

export const PlanType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
  span {
    color: #141938;
  }
  .b-plan-type {
    font-size: 24px;
    font-weight: 700;
  }
  .b-plan-cost-text {
    color: #7981B2;
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px;
    text-transform: uppercase;
  }
  .b-plan-cost {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const PlanDescription = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 50px;
  padding-left: 15px;
  li {
    font-size: 18px;
    line-height: 25px;
  }
`;
