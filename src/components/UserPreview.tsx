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

const UserPreview = () => {
  const theme = useTheme();
  const { setSecondaryColor } = useContext(ThemeContext);

  return (
    <Stack sx={{ height: "348px" }}>
      <Typography fontWeight="bold" sx={{ p: 2 }}>
        User Preview
      </Typography>
      <Stack
        sx={{ p: 2, flexGrow: 1 }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack flexDirection="row">
          <Avatar sx={{ mr: 2, background: theme.palette.secondary.main }} />
          <Card
            sx={{
              p: 2,
              background: theme.palette.secondary.main,
              maxWidth: "288px",
            }}
          >
            <Typography sx={{ color: theme.palette.text.user }}>
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
          onClick={() => setSecondaryColor("#DFE4F3")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#DFE4F3",
            borderRadius: "4px",
            border: "1px solid #000",
            mr: 2,
            cursor: "pointer",
          }}
        />
        <Box
          onClick={() => setSecondaryColor("#444")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#444",
            borderRadius: "4px",
            mr: 2,
            cursor: "pointer",
          }}
        />
        <Box
          onClick={() => setSecondaryColor("#999")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#999",
            borderRadius: "4px",
            mr: 2,
            cursor: "pointer",
          }}
        />
        <Box
          onClick={() => setSecondaryColor("#ffffff")}
          sx={{
            height: "40px",
            width: "40px",
            background: "#fff",
            borderRadius: "4px",
            mr: 2,
            cursor: "pointer",
          }}
        />
        <Button variant="contained" sx={{ marginLeft: "auto", p: "8px 24px" }}>
          Select Custom Color
        </Button>
      </Stack>
    </Stack>
  );
};

export default UserPreview;
