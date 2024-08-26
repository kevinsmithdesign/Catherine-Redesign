import { Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <Typography variant="h4" mb={2}>
      {title}
    </Typography>
  );
};

export default PageTitle;
