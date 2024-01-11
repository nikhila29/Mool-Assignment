import React from "react";
import styled from "styled-components";

const StyledInfoCircle = styled.svg`
  &.path {
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const InfoCircle = ({ className }) => {
  return (
    <StyledInfoCircle
      className={`info-circle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </StyledInfoCircle>
  );
};
