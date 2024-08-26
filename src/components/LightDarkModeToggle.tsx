import React, { useContext, useEffect, useState } from "react";
import { Stack, useTheme } from "@mui/material";
import { ThemeContext } from "../ThemeContext";

const LightDarkModeToggle = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const theme = useTheme();
  const [activeCircle, setActiveCircle] = useState(
    mode === "light" ? "right" : "left"
  );

  useEffect(() => {
    setActiveCircle(mode === "light" ? "right" : "left");
  }, [mode]);

  const handleToggle = (circle) => {
    if (circle !== activeCircle) {
      toggleTheme();
      setActiveCircle(circle);
    }
  };

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "72px",
        height: "36px",
        background: "#DFE4F3",
        borderRadius: "20px",
      }}
    >
      <Stack
        onClick={() => handleToggle("left")}
        sx={{
          width: "32px",
          height: "32px",
          background:
            activeCircle === "left"
              ? theme.palette.primary.main
              : "transparent",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.8027 13.5032C20.8531 13.4764 20.913 13.5225 20.8969 13.5781C19.6887 17.8055 15.794 20.8996 11.1941 20.8996C5.61495 20.8996 1.09961 16.3736 1.09961 10.8051C1.09961 6.19448 4.18298 2.3095 8.41151 1.10226C8.46609 1.08621 8.5121 1.14614 8.48535 1.19645C6.66058 4.62979 7.20534 9.00498 10.0993 11.9C12.9943 14.7938 17.3694 15.3387 20.8027 13.5032Z"
            stroke={activeCircle === "left" ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Stack>
      <Stack
        onClick={() => handleToggle("right")}
        sx={{
          width: "32px",
          height: "32px",
          background:
            activeCircle === "right"
              ? theme.palette.primary.main
              : "transparent",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9978 1.09961V2.6087M10.9978 19.3905V20.8996M20.8977 10.9997H19.3886M2.60675 10.9997H1.09766M17.9979 3.99901L16.9308 5.06609M5.06465 16.9328L3.99759 17.9999M17.9979 17.9999L16.9308 16.9328M5.06465 5.0666L3.99759 3.99954"
            stroke={activeCircle === "right" ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0018 6.38281C13.5512 6.38281 15.6168 8.44952 15.6168 10.9979C15.6168 13.5472 13.5512 15.6139 11.0018 15.6139C8.45235 15.6139 6.38672 13.5472 6.38672 10.9979C6.38672 8.44952 8.45235 6.38281 11.0018 6.38281Z"
            stroke={activeCircle === "right" ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Stack>
    </Stack>
  );
};

export default LightDarkModeToggle;
