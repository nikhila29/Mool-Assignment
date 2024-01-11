import React from "react";
import styled from "styled-components";

const StyledCircle2 = styled.svg`
  .path {
    stroke: #101828;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const Circle2 = ({ className }) => {
  return (
    <StyledCircle2
      className={`circle-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      />
    </StyledCircle2>
  );
};
