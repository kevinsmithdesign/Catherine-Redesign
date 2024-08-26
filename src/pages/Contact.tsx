import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import PageTitle from "../components/PageTitle";
import SecondaryPageTitle from "../components/SecondaryPageTitle";

const Contact = () => {
  const theme = useTheme();

  return (
    <div>
      <PageTitle title="Contact" />
      <SecondaryPageTitle title="We're here to help!" />
      <Typography variant="body1" fontWeight="bold" mb={2}>
        Technical Support
      </Typography>
      <Typography>
        If you are experiencing technical problems with Catherine, such as
        having trouble logging in or signing up, we are here to assist you in
        resolving these issues. <br />
        <br />
        Please send us an email at 
        <span
          style={{
            color: theme.palette.primary.main,
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          help@catherine.brado.ai
        </span>
        . Describe your issue in as much detail as possible. Our technical
        support team will review your problem and get back to you as quickly as
        possible.
        <br />
        <br />
      </Typography>
      <Typography variant="body1" fontWeight="bold" mb={2}>
        Clinical Support
      </Typography>
      If you have dementia-related questions, you can call {" "}
      <span
        style={{
          color: theme.palette.primary.main,
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        513-667-1414
      </span>
       and speak with a registered nurse. Thank you for using Catherine.
    </div>
  );
};

export default Contact;
