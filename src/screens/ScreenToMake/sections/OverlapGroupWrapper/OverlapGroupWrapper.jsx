import React from "react";
import styled from "styled-components";
import { ChevronRight3 } from "../../../../icons/ChevronRight3";
import { File051 } from "../../../../icons/File051";

const StyledOverlapGroupWrapper = styled.div`
  background-color: #f4f5f9;
  border-radius: 6px;
  height: 64px;
  left: 160px;
  position: absolute;
  top: 1078px;
  width: 1192px;

  & .file {
    height: 24px !important;
    left: 26px !important;
    position: absolute !important;
    top: 20px !important;
    width: 26px !important;
  }

  & .text-wrapper-23 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 700;
    left: 60px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 19px;
    width: 118px;
  }

  & .chevron-right-3-instance {
    height: 24px !important;
    left: 1132px !important;
    position: absolute !important;
    top: 20px !important;
    width: 26px !important;
  }
`;

export const OverlapGroupWrapper = () => {
  return (
    <StyledOverlapGroupWrapper>
      <File051 className="file" color="#344054" />
      <div className="text-wrapper-23">Section 80G</div>
      <ChevronRight3 className="chevron-right-3-instance" color="#667085" />
    </StyledOverlapGroupWrapper>
  );
};
