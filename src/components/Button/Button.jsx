import PropTypes from "prop-types";
import React from "react";
import { Circle } from "../../icons/Circle";
import { ButtonBase } from "../ButtonBase";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  align-items: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  display: inline-flex;
  position: relative;

  & .button-base-instance {
    background-color: var(--white) !important;
    border-color: var(--gray-300) !important;
    flex: 0 0 auto !important;
  }

  & .design-component-instance-node {
    color: var(--gray-700) !important;
    font-family: "Inter", Helvetica !important;
    font-size: 14px !important;
    font-style: unset !important;
    font-weight: 600 !important;
    letter-spacing: 0 !important;
    line-height: 20px !important;
  }

  & .circle-instance {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }
`;

export const Button = ({
  size,
  hierarchy,
  icon,
  destructive,
  state,
  buttonBaseIcon = <Circle className="circle-instance" color="#344054" />,
  buttonBaseText = "Button CTA",
  className
}) => {
  return (
    <StyledButton className={`button ${className}`}>
      <ButtonBase
        className="button-base-instance"
        icon="leading"
        override={buttonBaseIcon}
        size="md"
        text={buttonBaseText}
        textClassName="design-component-instance-node"
      />
    </StyledButton>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["md"]),
  hierarchy: PropTypes.oneOf(["secondary-gray"]),
  icon: PropTypes.oneOf(["leading"]),
  destructive: PropTypes.bool,
  state: PropTypes.oneOf(["default"]),
  buttonBaseText: PropTypes.string
};
