import React, { useContext } from "react";
import {
  Stack,
  Typography,
  Card,
  useTheme,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { ThemeContext } from "../ThemeContext";

const CatherinePreview = () => {
  const theme = useTheme();
  const { setPrimaryColor } = useContext(ThemeContext);

  return (
    <Stack sx={{ height: "348px" }}>
      <Typography fontWeight="bold" sx={{ p: 2 }}>
        Catherine Preview
      </Typography>
      <Stack
        sx={{ p: 2, flexGrow: 1 }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack flexDirection="row">
          <Avatar sx={{ mr: 2, background: theme.palette.primary.main }} />
          <Card
            sx={{
              p: 2,
              background: theme.palette.primary.main,
              maxWidth: "288px",
            }}
          >
            <Typography sx={{ color: theme.palette.text.bot }}>
              Hi I'm Catherine, what can I help you with today?
            </Typography>
          </Card>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        sx={{ background: "#DFE4F3", p: 2, flexShrink: 0 }}
      >
        <Box
          onClick={() => setPrimaryColor("#3653B0")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#3653B0",
            borderRadius: "4px",
            mr: 2,
            cursor: "pointer",
          }}
        />
        <Box
          onClick={() => setPrimaryColor("#5646D2")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#5646D2",
            borderRadius: "4px",
            mr: 2,
            cursor: "pointer",
          }}
        />
        <Box
          onClick={() => setPrimaryColor("#8E81E9")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#8E81E9",
            borderRadius: "4px",
            mr: 2,
            cursor: "pointer",
          }}
        />
        {/* <Box
          onClick={() => setPrimaryColor("#ddd")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#fff",
            borderRadius: "4px",
            mr: 2,
            cursor: "pointer",
          }}
        /> */}
        <Button variant="contained" sx={{ marginLeft: "auto", p: "8px 24px" }}>
          Select Custom Color
        </Button>
      </Stack>
    </Stack>
  );
};

export default CatherinePreview;
