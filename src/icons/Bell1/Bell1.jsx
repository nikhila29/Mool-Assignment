import React from "react";
import styled from "styled-components";

const StyledBell1 = styled.svg`
  .path {
    stroke: #667085;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.66667;
  }
`;

export const Bell1 = ({ className }) => {
  return (
    <StyledBell1
      className={`bell-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.108C10.5788 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42116 18.2537 9.16814 18.108C8.91513 17.9622 8.70484 17.7526 8.55833 17.5M15 6.66669C15 5.3406 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.3406 5 6.66669C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66669Z"
      />
    </StyledBell1>
  );
};
