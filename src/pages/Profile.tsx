import React from "react";
import {
  Stack,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  Divider,
} from "@mui/material";
import PageTitle from "../components/PageTitle";
import SecondaryPageTitle from "../components/SecondaryPageTitle";
import FormField from "../components/FormField";

import SendIcon from "../icons/SendIcon";
import AddAttachementIcon from "../icons/AddAttachementIcon";
import ShowPasswordIcon from "../icons/ShowPasswordIcon";
import HidePasswordIcon from "../icons/HidePasswordIcon";
import MoreIcon from "../icons/MoreIcon";
import MicrophoneIcon from "../icons/MicrophoneIcon";
import TextHeightIcon from "../icons/TextHeightIcon";

const Profile = () => {
  const theme = useTheme();

  return (
    <>
      <PageTitle title="Profile" />
      <SecondaryPageTitle title="Personal Information" />
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <FormField label="First Name" placeholderText="First Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField label="Last Name" placeholderText="Last Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField label="Email" placeholderText="email@domain.com" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField label="Phone" placeholderText="Phone" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField label="Username (Optional)" placeholderText="Username" />
        </Grid>
      </Grid>
      <SecondaryPageTitle title="Change Password" />
      <Grid container mb={3} spacing={4}>
        <Grid item xs={12} md={6}>
          <FormField label="Current Password" placeholderText="••••••••" />
        </Grid>
      </Grid>
      <Grid container mb={3} spacing={4}>
        <Grid item xs={12} md={6}>
          <FormField label="New Password" placeholderText="••••••••" />
        </Grid>
      </Grid>
      <Grid container mb={3} spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack mb={4}>
            <FormField
              label="Confirm New Password"
              placeholderText="••••••••"
            />
          </Stack>
          <Button variant="contained" fullWidth>
            Update Profile
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <SendIcon />
      <AddAttachementIcon />
      <ShowPasswordIcon />
      <HidePasswordIcon />
      <MoreIcon />
      <MicrophoneIcon />
      <TextHeightIcon />
    </>
  );
};

export default Profile;
