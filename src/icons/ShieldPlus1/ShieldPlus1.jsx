import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledShieldPlus1 = styled.svg`
  .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const ShieldPlus1 = ({ color = "#344054", className }) => {
  return (
    <StyledShieldPlus1
      className={`shield-plus-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M12 14.5V8.5M9 11.5H15M20 12C20 16.9084 14.646 20.4784 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V7.2176C4 6.41809 4 6.01833 4.13076 5.6747C4.24627 5.37114 4.43398 5.10028 4.67766 4.88553C4.9535 4.64244 5.3278 4.50208 6.0764 4.22135L11.4382 2.21067C11.6461 2.13271 11.75 2.09373 11.857 2.07828C11.9518 2.06457 12.0482 2.06457 12.143 2.07828C12.25 2.09373 12.3539 2.13271 12.5618 2.21067L17.9236 4.22135C18.6722 4.50208 19.0465 4.64244 19.3223 4.88553C19.566 5.10028 19.7537 5.37114 19.8692 5.6747C20 6.01833 20 6.41809 20 7.2176V12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </StyledShieldPlus1>
  );
};

ShieldPlus1.propTypes = {
  color: PropTypes.string
};
