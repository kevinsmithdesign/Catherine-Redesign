import React from "react";
import { useTheme, Box } from "@mui/material";

const SendIcon = ({ width = 24, height = 24 }) => {
  const theme = useTheme();

  // Choose the stroke color based on the theme mode
  const stroke = theme.palette.mode === "light" ? "#000" : "#fff";

  return (
    <Box
      sx={{
        height: "32px",
        width: "32px",
        borderRadius: "4px",
        background: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </Box>
  );
};

export default SendIcon;
