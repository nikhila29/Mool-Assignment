import React from "react";
import styled from "styled-components";

const StyledHelpCircle1 = styled.svg`
  .path {
    stroke: #667085;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const HelpCircle1 = ({ className }) => {
  return (
    <StyledHelpCircle1
      className={`help-circle-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_6731)">
        <path
          className="path"
          d="M7.57496 7.50002C7.77088 6.94308 8.15759 6.47344 8.66659 6.1743C9.17559 5.87515 9.77404 5.7658 10.3559 5.86561C10.9378 5.96543 11.4656 6.26796 11.8459 6.71963C12.2261 7.1713 12.4342 7.74296 12.4333 8.33335C12.4333 10 9.93329 10.8334 9.93329 10.8334M9.99996 14.1667H10.0083M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_6731">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </StyledHelpCircle1>
  );
};
