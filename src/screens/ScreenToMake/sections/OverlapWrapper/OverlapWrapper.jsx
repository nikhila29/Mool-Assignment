import React from "react";
import styled from "styled-components";
import { ChevronRight3 } from "../../../../icons/ChevronRight3";
import { ShieldPlus1 } from "../../../../icons/ShieldPlus1";

const StyledOverlapWrapper = styled.div`
  background-color: #f4f5f9;
  border-radius: 6px;
  height: 64px;
  left: 160px;
  position: absolute;
  top: 998px;
  width: 1192px;

  & .text-wrapper-22 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 700;
    left: 60px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 19px;
    width: 117px;
  }

  & .chevron-right-3 {
    height: 24px !important;
    left: 1132px !important;
    position: absolute !important;
    top: 20px !important;
    width: 26px !important;
  }

  & .shield-plus {
    height: 24px !important;
    left: 26px !important;
    position: absolute !important;
    top: 20px !important;
    width: 26px !important;
  }
`;

export const OverlapWrapper = () => {
  return (
    <StyledOverlapWrapper>
      <div className="text-wrapper-22">Section 80D</div>
      <ChevronRight3 className="chevron-right-3" color="#667085" />
      <ShieldPlus1 className="shield-plus" color="#344054" />
    </StyledOverlapWrapper>
  );
};
