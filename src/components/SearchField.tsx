import React from "react";
import { Stack, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "../icons/SearchIcon";

const SearchField = ({ placeholderText = "Search" }) => {
  return (
    <Stack flexDirection="row" alignItems="stretch" mb={3} gap={3}>
      <TextField
        fullWidth
        placeholder={placeholderText}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Stack flexDirection="column" alignItems="stretch">
        <Button variant="contained" sx={{ height: "100%", p: "0px 48px" }}>
          Search
        </Button>
      </Stack>
    </Stack>
  );
};

export default SearchField;
