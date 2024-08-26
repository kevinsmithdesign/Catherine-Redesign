import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { ThemeContext } from "../ThemeContext"; // Adjust the import path as necessary

const UserTextColorPreview = () => {
  const { setUserBubbleText } = useContext(ThemeContext);

  const handleColorClick = (color) => {
    setUserBubbleText(color);
  };

  return (
    <Stack flexDirection="row" gap={2}>
      <Typography
        sx={{ color: "#000" }}
        onClick={() => handleColorClick("#000")}
      >
        abc
      </Typography>
      <Typography
        sx={{ color: "#444" }}
        onClick={() => handleColorClick("#444")}
      >
        abc
      </Typography>
      <Typography
        sx={{ color: "#999" }}
        onClick={() => handleColorClick("#999")}
      >
        abc
      </Typography>
      <Typography
        sx={{ color: "#fff", background: "#000" }}
        onClick={() => handleColorClick("#fff")}
      >
        abc
      </Typography>
    </Stack>
  );
};

export default UserTextColorPreview;
