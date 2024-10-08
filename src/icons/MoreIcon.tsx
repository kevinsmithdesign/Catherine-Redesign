import React from "react";
import { useTheme } from "@mui/material";

const MoreIcon = ({ width = 24, height = 24 }) => {
  const theme = useTheme();

  // Choose the stroke color based on the theme mode
  const stroke = theme.palette.mode === "light" ? "#000" : "#fff";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 10C3.897 10 3 10.897 3 12C3 13.103 3.897 14 5 14C6.103 14 7 13.103 7 12C7 10.897 6.103 10 5 10Z"
        fill={stroke}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 10C10.897 10 10 10.897 10 12C10 13.103 10.897 14 12 14C13.103 14 14 13.103 14 12C14 10.897 13.103 10 12 10Z"
        fill={stroke}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 10C17.897 10 17 10.897 17 12C17 13.103 17.897 14 19 14C20.103 14 21 13.103 21 12C21 10.897 20.103 10 19 10Z"
        fill={stroke}
      ></path>
    </svg>
  );
};

export default MoreIcon;
