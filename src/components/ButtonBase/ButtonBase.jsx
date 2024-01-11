import PropTypes from "prop-types";
import React from "react";
import { Circle } from "../../icons/Circle";
import styled from "styled-components";

const StyledButtonBase = styled.div`
  align-items: center;
  background-color: var(--primary-600);
  border: 1px solid;
  border-color: var(--primary-600);
  border-radius: 8px;
  box-shadow: var(--shadow-xs);
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  overflow: hidden;
  padding: 10px 16px;
  position: relative;

  & .text {
    color: var(--white);
    font-family: var(--text-sm-semibold-font-family);
    font-size: var(--text-sm-semibold-font-size);
    font-style: var(--text-sm-semibold-font-style);
    font-weight: var(--text-sm-semibold-font-weight);
    letter-spacing: var(--text-sm-semibold-letter-spacing);
    line-height: var(--text-sm-semibold-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .circle-1 {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }
`;

export const ButtonBase = ({
  size,
  icon,
  className,
  override = <Circle className="circle-1" color="white" />,
  textClassName,
  text = "Button CTA"
}) => {
  return (
    <StyledButtonBase className={`button-base ${className}`}>
      {override}
      <div className={`text ${textClassName}`}>{text}</div>
    </StyledButtonBase>
  );
};

ButtonBase.propTypes = {
  size: PropTypes.oneOf(["md"]),
  icon: PropTypes.oneOf(["leading"]),
  text: PropTypes.string
};
