import React from "react";
import { Card, Stack, Typography, Slider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"; // Import the context

const TypeSizeAdjuster = ({ setTypeAdjustOpen }) => {
  const location = useLocation();
  const { typographySize, setTypographySize } = useContext(ThemeContext);

  const handleSliderChange = (event, newValue) => {
    setTypographySize(newValue); // Update the global typography size
  };

  return (
    <Card
      sx={{
        width: "290px",
        borderRadius: "20px",
        position: "absolute",
        zIndex: 100,
        right: 160,
        p: 2,
      }}
    >
      <Stack flexDirection="row" alignItems="center">
        <Typography sx={{ fontSize: "10px", mr: 2 }}>T</Typography>
        <Slider
          value={typographySize}
          min={10}
          max={48} // Set the maximum size to 48px
          onChange={handleSliderChange}
          aria-label="Typography Size"
        />
        <Typography sx={{ fontSize: "32px", ml: 1 }}>T</Typography>
      </Stack>
    </Card>
  );
};

export default TypeSizeAdjuster;
