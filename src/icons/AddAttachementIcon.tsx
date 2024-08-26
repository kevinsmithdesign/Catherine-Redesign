import React from "react";
import { useTheme } from "@mui/material";

const AddAttachementIcon = ({ width = 24, height = 24 }) => {
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
        d="M21 12.3955L14.6912 18.7043C12.0164 21.3781 7.67982 21.3781 5.00605 18.7043C2.33132 16.0296 2.33132 11.693 5.00605 9.01826L9.39909 4.6262C11.1758 2.84856 14.0558 2.84856 15.8325 4.6262C17.6091 6.4019 17.6091 9.28292 15.8325 11.0596L11.5474 15.3446C10.6503 16.2417 9.19671 16.2417 8.29961 15.3446C7.40252 14.4475 7.40252 12.9939 8.29961 12.0968L12.3433 8.05306"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default AddAttachementIcon;
