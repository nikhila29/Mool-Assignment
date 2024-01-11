import React from "react";
import { CoinsStacked04 } from "../../../../../../icons/CoinsStacked04";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 56px;
  left: 458px;
  position: absolute;
  top: 398px;
  width: 235px;

  & .group-8 {
    height: 56px;
    left: 72px;
    position: absolute;
    top: 0;
    width: 167px;
  }

  & .text-wrapper-19 {
    color: #667085;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .text-wrapper-20 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 20px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 32px;
    white-space: nowrap;
  }

  & .coins-stacked-04-wrapper {
    background-color: #d5edff;
    border-radius: 28px;
    height: 56px;
    left: 0;
    position: absolute;
    top: 0;
    width: 56px;
  }

  & .coins-stacked-04 {
    height: 24px !important;
    left: 16px !important;
    position: absolute !important;
    top: 16px !important;
    width: 24px !important;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      <div className="group-8">
        <div className="text-wrapper-19">Remaining to Declare</div>
        <div className="text-wrapper-20">67,987 INR</div>
      </div>
      <div className="coins-stacked-04-wrapper">
        <CoinsStacked04 className="coins-stacked-04" color="#25A4FF" />
      </div>
    </StyledDiv>
  );
};
