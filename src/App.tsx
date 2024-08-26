import "./styles.css";
import React, { useState, useEffect } from "react";
import { Stack, useTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Chat from "./pages/Chat";
import ChatHistory from "./pages/ChatHistory";
import About from "./pages/About";
import Prompts from "./pages/Prompts";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import Privacy from "./pages/Privacy";

// Components
import Navbar from "./components/Navbar";

const App = () => {
  const theme = useTheme();

  return (
    <Router>
      <Stack
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Stack
          flexDirection="row"
          sx={{
            position: "relative",
            p: 2,
            width: "100%",
            maxWidth: "1286px",
            mx: "auto",
          }}
        >
          <Stack sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/chat-history" element={<ChatHistory />} />
              <Route path="/about" element={<About />} />
              <Route path="/prompts" element={<Prompts />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Stack>
        </Stack>
      </Stack>
    </Router>
  );
};

export default App;
