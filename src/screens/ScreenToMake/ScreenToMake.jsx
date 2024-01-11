import React from "react";
import { OverlapGroup } from "./sections/OverlapGroup/OverlapGroup";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper/OverlapGroupWrapper";
import { OverlapWrapper } from "./sections/OverlapWrapper/OverlapWrapper";
import styled from "styled-components";

const StyledScreenToMake = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div-3 {
    background-color: #ffffff;
    height: 1394px;
    position: relative;
    width: 1512px;
  }

  & .button-2 {
    all: unset;
    align-items: flex-start;
    border-radius: 8px;
    box-sizing: border-box;
    display: inline-flex;
    left: 160px;
    position: absolute;
    top: 1212px;
  }

  & .button-base-3 {
    all: unset;
    align-items: center;
    background-color: #405cd2;
    border: 1px solid;
    border-radius: 6px;
    box-shadow: var(--shadow-xs);
    box-sizing: border-box;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    overflow: hidden;
    padding: 10px 16px;
    position: relative;
  }

  & .text-3 {
    color: #ffffff;
    font-family: var(--text-sm-semibold-font-family);
    font-size: var(--text-sm-semibold-font-size);
    font-style: var(--text-sm-semibold-font-style);
    font-weight: var(--text-sm-semibold-font-weight);
    letter-spacing: var(--text-sm-semibold-letter-spacing);
    line-height: var(--text-sm-semibold-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const ScreenToMake = () => {
  return (
    <StyledScreenToMake>
      <div className="div-3">
        <OverlapGroup />
        <OverlapWrapper />
        <OverlapGroupWrapper />
        <button className="button-2">
          <button className="button-base-3">
            <div className="text-3">Save</div>
          </button>
        </button>
      </div>
    </StyledScreenToMake>
  );
};