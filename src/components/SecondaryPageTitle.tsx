import { Typography, useTheme } from "@mui/material";
import React from "react";

const SecondaryPageTitle = ({ title }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      fontWeight="bold"
      mb={2}
      sx={{ color: theme.palette.primary.main }}
    >
      {title}
    </Typography>
  );
};

export default SecondaryPageTitle;
