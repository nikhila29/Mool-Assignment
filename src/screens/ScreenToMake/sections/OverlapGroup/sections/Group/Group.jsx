import React from "react";
import { Bell1 } from "../../../../../../icons/Bell1";
import { ChevronRight1 } from "../../../../../../icons/ChevronRight1";
import { HelpCircle1 } from "../../../../../../icons/HelpCircle1/HelpCircle1";
import styled from "styled-components";

const StyledGroup = styled.div`
  height: 48px;
  left: 1137px;
  position: absolute;
  top: 16px;
  width: 335px;

  & .nav-item-button {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 6px;
    display: inline-flex;
    gap: 105px;
    left: 50px;
    overflow: hidden;
    padding: 10px;
    position: absolute;
    top: 4px;
  }

  & .icon-instance-node {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }

  & .help-circle-wrapper {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 6px;
    display: inline-flex;
    gap: 105px;
    left: 0;
    overflow: hidden;
    padding: 10px;
    position: absolute;
    top: 4px;
  }

  & .frame {
    align-items: center;
    background-color: #ffffff;
    border: 1px solid;
    border-color: var(--gray-5);
    border-radius: 6px;
    display: inline-flex;
    gap: 8px;
    left: 100px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  & .div-2 {
    background-color: #1e1e1e;
    background-image: url(../../../../../../../static/img/mask-group.png);
    background-size: 100% 100%;
    border-radius: 16px;
    height: 32px;
    position: relative;
    width: 32px;
  }

  & .text-wrapper-15 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const Group = () => {
  return (
    <StyledGroup>
      <div className="nav-item-button">
        <Bell1 className="icon-instance-node" />
      </div>
      <div className="help-circle-wrapper">
        <HelpCircle1 className="icon-instance-node" />
      </div>
      <div className="frame">
        <div className="div-2" />
        <div className="text-wrapper-15">Abhishek Mohanty</div>
        <ChevronRight1 className="icon-instance-node" color="#4F4F4F" />
      </div>
    </StyledGroup>
  );
};