import React from "react";
import { Typography, TextField, InputAdornment } from "@mui/material";

const FormField = ({
  label = "Label",
  placeholderText = "Text",
  startIcon,
  endIcon,
}) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold" }} variant="body2" mb={0.5}>
        {label}
      </Typography>
      <TextField
        placeholder={placeholderText}
        fullWidth
        InputProps={{
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default FormField;
