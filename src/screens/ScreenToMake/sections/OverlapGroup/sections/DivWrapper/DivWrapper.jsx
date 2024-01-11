import React from "react";
import { CoinsStacked03 } from "../../../../../../icons/CoinsStacked03";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  height: 56px;
  left: 200px;
  position: absolute;
  top: 398px;
  width: 205px;

  & .group-7 {
    height: 56px;
    left: 72px;
    position: absolute;
    top: 0;
    width: 137px;
  }

  & .text-wrapper-17 {
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

  & .text-wrapper-18 {
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

  & .coins-stacked-wrapper {
    background-color: #f1ffd5;
    border-radius: 28px;
    height: 56px;
    left: 0;
    position: absolute;
    top: 0;
    width: 56px;
  }

  & .coins-stacked {
    height: 24px !important;
    left: 16px !important;
    position: absolute !important;
    top: 16px !important;
    width: 24px !important;
  }
`;

export const DivWrapper = () => {
  return (
    <StyledDivWrapper>
      <div className="group-7">
        <div className="text-wrapper-17">Declared Amount</div>
        <div className="text-wrapper-18">67,987 INR</div>
      </div>
      <div className="coins-stacked-wrapper">
        <CoinsStacked03 className="coins-stacked" color="#93CC1A" />
      </div>
    </StyledDivWrapper>
  );
};
