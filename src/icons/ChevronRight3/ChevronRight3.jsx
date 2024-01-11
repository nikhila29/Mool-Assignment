import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledChevronRight3 = styled.svg`
  &.path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const ChevronRight3 = ({ color = "#667085", className }) => {
  return (
    <StyledChevronRight3
      className={`chevron-right-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </StyledChevronRight3>
  );
};

ChevronRight3.propTypes = {
  color: PropTypes.string
};
