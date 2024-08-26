import React from "react";
import { useTheme } from "@mui/material";

const TextHeightIcon = ({ width = 24, height = 24 }) => {
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
        d="M10.0408 4.62109V17.9157M7.15723 17.9157H13.0506"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M19.4677 11.7656L21.4999 13.7978M19.4677 11.7656L17.4355 13.7978M19.4677 11.7656V20.9105M19.4677 20.9105L17.4355 18.8783M19.4677 20.9105L21.4999 18.8783"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M3.5 6.96421V4.62109H16.7093V6.96421"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default TextHeightIcon;
