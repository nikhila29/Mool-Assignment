import React from "react";
import styled from "styled-components";

const StyledCalendar = styled.svg`
  &.path {
    stroke: #344054;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.67;
  }
`;

export const Calendar = ({ className }) => {
  return (
    <StyledCalendar
      className={`calendar ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.3333 1.66669V5.00002M6.66667 1.66669V5.00002M2.5 8.33335H17.5M4.16667 3.33335H15.8333C16.7538 3.33335 17.5 4.07955 17.5 5.00002V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V5.00002C2.5 4.07955 3.24619 3.33335 4.16667 3.33335Z"
      />
    </StyledCalendar>
  );
};
