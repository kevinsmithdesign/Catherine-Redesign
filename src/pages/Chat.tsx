import React, { useState } from "react";
import {
  Stack,
  Avatar,
  TextField,
  Card,
  Box,
  Skeleton,
  useTheme,
  InputAdornment,
} from "@mui/material";
import AddAttachementIcon from "../icons/AddAttachementIcon";

import SendIcon from "../icons/SendIcon";

const Chat = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([
    {
      text: "OK, let’s chat about Orthopedic. What would you like to know?",
      sender: "bot",
    },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userMessage.trim() === "") return;

    // Add user message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, sender: "user" },
    ]);
    setUserMessage("");
    setIsLoading(true);

    // Simulate bot response with a delay
    setTimeout(() => {
      setIsLoading(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          sender: "bot",
        },
      ]);
    }, 2000);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 2,
          width: "100%",
          maxWidth: "1286px",
          boxSizing: "border-box",
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                message.sender === "user" ? "flex-end" : "flex-start",
              mb: 2,
            }}
          >
            {message.sender === "bot" && (
              <Avatar
                sx={{
                  mr: 2,
                  bgcolor: theme.palette.primary.main,
                  // color: theme.palette.contrastText,
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                C
              </Avatar>
            )}
            <Card
              sx={{
                p: 2,
                maxWidth: "75%",
                border: "none",
                borderRadius:
                  message.sender === "user"
                    ? "16px 0px 16px 16px"
                    : "0px 16px 16px 16px",
                backgroundColor:
                  message.sender === "user"
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main,
                color:
                  message.sender === "user"
                    ? theme.palette.text.user
                    : theme.palette.text.bot,
              }}
            >
              {message.text}
            </Card>
            {message.sender === "user" && (
              <Avatar
                sx={{
                  ml: 2,
                  bgcolor: theme.palette.secondary.main,
                  color: "#111",
                  fontSize: "16px",
                }}
              >
                S
              </Avatar>
            )}
          </Box>
        ))}
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mb: 2,
            }}
          >
            <Avatar
              sx={{
                mr: 2,
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                fontSize: "16px",
              }}
            >
              C
            </Avatar>
            <Card
              sx={{
                p: 2,
                maxWidth: "75%",
                width: "100%",
                borderRadius: "0px 16px 16px 16px",
                border: "none",
                bgcolor: theme.palette.primary.main,
              }}
            >
              <Skeleton
                variant="text"
                width="60%"
                sx={{ background: "white", opacity: 0.7 }}
              />
              <Skeleton
                variant="text"
                width="40%"
                sx={{ background: "white", opacity: 0.7 }}
              />
            </Card>
          </Box>
        )}
      </Box>
      <Box
        component="form"
        onSubmit={handleSendMessage}
        sx={{
          p: 2,
          width: "100%",
          maxWidth: "1286px",
          boxSizing: "border-box",
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* <TextField
          fullWidth
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
        /> */}
        <TextField
          fullWidth
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Stack sx={{ cursor: "pointer" }}>
                  <AddAttachementIcon />
                </Stack>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Stack sx={{ cursor: "pointer" }}>
                  <SendIcon />
                </Stack>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Chat;
