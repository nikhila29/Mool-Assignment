import React from "react";
import styled from "styled-components";

const StyledInfoCircle1 = styled.svg`
  .g {
    clip-path: url(#clip0_1_6689);
  }

  .path {
    stroke: #10AA64;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }

  .defs {
    .clip-path {
      rect {
        fill: white;
      }
    }
  }
`;

export const InfoCircle1 = ({ className }) => {
  return (
    <StyledInfoCircle1
      className={`info-circle-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_6689)">
        <path
          className="path"
          d="M10 13.3333V9.99999M10 6.66666H10.0083M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 9.99999C1.66667 5.39762 5.39763 1.66666 10 1.66666C14.6024 1.66666 18.3333 5.39762 18.3333 9.99999Z"
          stroke="#10AA64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_6689">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </StyledInfoCircle1>
  );
};
