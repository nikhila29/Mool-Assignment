import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledChevronRight1 = styled.svg`
  &.path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const ChevronRight1 = ({ color = "#667085", className }) => {
  return (
    <StyledChevronRight1
      className={`chevron-right-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 7.5L10 12.5L15 7.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </StyledChevronRight1>
  );
};

ChevronRight1.propTypes = {
  color: PropTypes.string
};
