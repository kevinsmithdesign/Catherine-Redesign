import React from "react";
import {
  Stack,
  Typography,
  Grid,
  Card,
  FormGroup,
  Slider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"; // Import the context
import Switch, { SwitchProps } from "@mui/material/Switch";
import PageTitle from "../components/PageTitle";
import LightDarkModeToggle from "../components/LightDarkModeToggle";
import FontStyleSelector from "../components/FontStyleSelector";
import TypeSizeAdjuster from "../components/TypeSizeAdjuster";
import FontWeightSelector from "../components/FontWeightSelector";
import CatherinePreview from "../components/CatherinePreview";
import UserPreview from "../components/UserPreview";
import TextColorPreview from "../components/TextColorPreview";
import UserTextColorPreview from "../components/UserTextColorPreview";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Settings = () => {
  const location = useLocation();

  const { typographySize, setTypographySize, fontFamily, toggleFontFamily } =
    useContext(ThemeContext);

  const handleSliderChange = (event, newValue) => {
    setTypographySize(newValue); // Update the global typography size
  };
  return (
    <div>
      <PageTitle title="Settings" />
      <Typography variant="body1" mb={4}>
        Customize your body copy by changing the Font Style, Font Weight, Font
        Size and Font Color. You can also change your Viewing Mode. NOTE: Some
        selections, especially color choices may conflict and become difficult
        to read. Please make sure of your selections before you save your
        changes.
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 1 }}>
            <CatherinePreview />
          </Card>
          <Card sx={{ p: 2, mb: 1 }}>
            <TextColorPreview />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 1 }}>
            <UserPreview />
          </Card>
          <Card sx={{ p: 2, mb: 1 }}>
            <UserTextColorPreview />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} md={2} lg={3}>
          <Card
            sx={{
              p: 2,
              mb: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Typography sx={{ fontSize: "12px", mr: 1 }}>Dark</Typography>
              <LightDarkModeToggle />
              <Typography sx={{ fontSize: "12px", ml: 1 }}>Light</Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={2} lg={3}>
          <Card
            sx={{
              p: 2,
              mb: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <FontStyleSelector />
          </Card>
        </Grid>
        <Grid item xs={12} md={2} lg={3}>
          <Card
            sx={{
              p: 2,
              mb: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* <FormGroup>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography sx={{ fontSize: "12px", mr: 1 }}>
                  Regular
                </Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography
                  sx={{ fontSize: "12px", ml: 1, fontWeight: "bold" }}
                >
                  Bold
                </Typography>
              </Stack>
            </FormGroup> */}
            <FontWeightSelector />
          </Card>
        </Grid>
        <Grid item xs={12} md={2} lg={3}>
          <Card
            sx={{
              p: 2,
              mb: 1,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Stack flexDirection="row" alignItems="center">
              <Typography sx={{ fontSize: "10px", mr: 2 }}>T</Typography>
              <Slider
                value={typographySize}
                min={10}
                max={48}
                onChange={handleSliderChange}
                aria-label="Typography Size"
              />
              <Typography sx={{ fontSize: "32px", ml: 1 }}>T</Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
