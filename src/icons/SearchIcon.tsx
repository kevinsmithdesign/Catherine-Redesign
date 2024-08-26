import React from "react";
import { useTheme } from "@mui/material";

const SearchIcon = ({ width = 24, height = 24 }) => {
  const theme = useTheme();

  // Choose the stroke color based on the theme mode
  const stroke = theme.palette.mode === "light" ? "#000" : "#fff";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6324 3C16.2814 3 20.0499 6.76847 20.0499 11.4175C20.0499 16.0666 16.2814 19.836 11.6324 19.836C6.98331 19.836 3.21484 16.0666 3.21484 11.4175C3.21484 6.76847 6.98331 3 11.6324 3Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.3613 17.584L20.7863 21.0002"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default SearchIcon;
