import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Calendar } from "../../icons/Calendar";
import { Button } from "../Button";

const StyledDatePickerDropdown = styled.div`
  height: 40px;
  width: 239px;

  & .button-instance {
    left: -1px !important;
  }
`;

export const DatePickerDropdown = ({
  opened,
  type,
  state,
  breakpoint,
  className,
  buttonButtonBaseIcon = <Calendar className="calendar-instance" />,
  buttonButtonBaseText = "Jan 6, 2022 – Jan 13, 2022"
}) => {
  return (
    <StyledDatePickerDropdown className={`date-picker-dropdown ${className}`}>
      <Button
        buttonBaseIcon={buttonButtonBaseIcon}
        buttonBaseText={buttonButtonBaseText}
        className="button-instance"
        destructive={false}
        hierarchy="secondary-gray"
        icon="leading"
        size="md"
        state="default"
      />
    </StyledDatePickerDropdown>
  );
};

DatePickerDropdown.propTypes = {
  opened: PropTypes.bool,
  type: PropTypes.oneOf(["dual-dates"]),
  state: PropTypes.oneOf(["active"]),
  breakpoint: PropTypes.oneOf(["desktop"]),
  buttonButtonBaseText: PropTypes.string
};
