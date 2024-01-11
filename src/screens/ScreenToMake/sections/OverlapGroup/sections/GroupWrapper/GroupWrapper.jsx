import React from "react";
import { DatePickerDropdown } from "../../../../../../components/DatePickerDropdown";
import { Calendar } from "../../../../../../icons/Calendar";
import styled from "styled-components";

const StyledGroupWrapper = styled.div`
  height: 40px;
  left: 1069px;
  position: absolute;
  top: 108px;
  width: 245px;

  & .text-wrapper-16 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 8px;
    white-space: nowrap;
  }

  & .date-picker-dropdown-instance {
    left: 123px !important;
    position: absolute !important;
    top: 0 !important;
    width: 120px !important;
  }

  & .calendar-2 {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }
`;

export const GroupWrapper = () => {
  return (
    <StyledGroupWrapper>
      <div className="text-wrapper-16">Financial Year :</div>
      <DatePickerDropdown
        breakpoint="desktop"
        buttonButtonBaseIcon={<Calendar className="calendar-2" />}
        buttonButtonBaseText="2023-24"
        className="date-picker-dropdown-instance"
        opened={false}
        state="active"
        type="dual-dates"
      />
    </StyledGroupWrapper>
  );
};
