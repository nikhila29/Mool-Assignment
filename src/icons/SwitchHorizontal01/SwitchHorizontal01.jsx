import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledSwitchHorizontal01 = styled.svg`
  &.path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const SwitchHorizontal01 = ({ color = "black", className }) => {
  return (
    <StyledSwitchHorizontal01
      className={`switch-horizontal-01 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.6667 14.1667H3.33334M3.33334 14.1667L6.66668 10.8333M3.33334 14.1667L6.66668 17.5M3.33334 5.83333H16.6667M16.6667 5.83333L13.3333 2.5M16.6667 5.83333L13.3333 9.16667"
      />
    </StyledSwitchHorizontal01>
  );
};

SwitchHorizontal01.propTypes = {
  color: PropTypes.string
};
