import React from "react";
import styled from "styled-components";

const StyledCalendar1 = styled.svg`
  .path {
    stroke: #101828;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const Calendar1 = ({ className }) => {
  return (
    <StyledCalendar1
      className={`calendar-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
      />
    </StyledCalendar1>
  );
};
