import React from "react";
import { useTheme } from "@mui/material";

const HidePasswordIcon = ({ width = 24, height = 24 }) => {
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
        d="M6.79401 18.1632C5.11701 16.7752 3.81202 14.9902 2.99902 12.9692C3.82402 10.9392 5.139 9.14724 6.827 7.75124C8.287 6.55224 10.112 5.88823 12 5.86523C13.898 5.89023 15.729 6.56223 17.193 7.77023"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M19.6772 5.29492L4.32715 20.6449"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.82091 15.1377C9.24191 14.5647 8.91792 13.7837 8.92092 12.9687C8.91792 11.2707 10.2919 9.89168 11.9899 9.88868C12.8079 9.88668 13.5919 10.2107 14.1699 10.7887"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M19.2501 9.9043C19.9521 10.8523 20.5401 11.8793 21.0011 12.9653C19.0871 17.3993 15.7051 20.0693 12.0001 20.0693C11.1631 20.0693 10.3321 19.9333 9.53809 19.6693"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M15.0227 13.5137C14.7937 14.7707 13.8107 15.7567 12.5537 15.9877"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default HidePasswordIcon;
