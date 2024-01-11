import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import { Overlap } from "./sections/Overlap";
import styled from "styled-components";

const StyledOverlapGroup = styled.div`
  height: 981px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1512px;

  & .text-wrapper-21 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 700;
    left: 200px;
    letter-spacing: 0;
    line-height: 32px;
    position: absolute;
    top: 111px;
    white-space: nowrap;
  }
`;

export const OverlapGroup = () => {
  return (
    <StyledOverlapGroup>
      <Overlap />
      <Group />
      <div className="text-wrapper-21">Chapter VI-A</div>
      <GroupWrapper />
      <DivWrapper />
      <Div />
    </StyledOverlapGroup>
  );
};
