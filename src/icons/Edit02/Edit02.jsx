import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledEdit02 = styled.svg`
  .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const Edit02 = ({ color = "black", className }) => {
  return (
    <StyledEdit02
      className={`edit-02 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 22 20"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M16.3812 8.33333L12.8081 5M2.53528 17.9167L5.55848 17.6033C5.92785 17.565 6.11253 17.5459 6.28515 17.4937C6.4383 17.4475 6.58405 17.3821 6.71843 17.2995C6.8699 17.2063 7.0013 17.0837 7.26409 16.8386L19.0611 5.83333C20.0478 4.91286 20.0478 3.42047 19.0611 2.5C18.0744 1.57952 16.4746 1.57952 15.4879 2.5L3.69095 13.5052C3.42816 13.7504 3.29676 13.873 3.19688 14.0143C3.10826 14.1396 3.03821 14.2756 2.98863 14.4185C2.93275 14.5795 2.91223 14.7518 2.87119 15.0964L2.53528 17.9167Z"
      />
    </StyledEdit02>
  );
};

Edit02.propTypes = {
  color: PropTypes.string
};
