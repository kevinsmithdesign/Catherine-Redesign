import React, { useState, useRef, useEffect } from "react";
import {
  Stack,
  Typography,
  Card,
  Grid,
  TextField,
  useTheme,
  IconButton,
  Skeleton,
} from "@mui/material";
import PageTitle from "../components/PageTitle";
import PlusIcon from "../icons/PlusIcon";
import { gsap } from "gsap";
import SearchField from "../components/SearchField";

const chatHistory = [
  {
    title: "past conversation 1",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  { title: "past conversation 2", description: "Lorem ipsum dolor hair" },
  { title: "past conversation 3", description: "Lorem ipsum dolor hair" },
  { title: "past conversation 4", description: "Lorem ipsum dolor hair" },
  { title: "past conversation 5", description: "Lorem ipsum dolor hair" },
  { title: "past conversation 6", description: "Lorem ipsum dolor hair" },
];

const ChatHistory = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(
    Array(chatHistory.length).fill(false)
  );
  const [loading, setLoading] = useState(true); // Loading state
  const iconRefs = useRef([]);
  const contentRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      // Once loading is done, fade in content and fade out skeletons simultaneously
      gsap.to(cardRefs.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
      setLoading(false);
    }, 2000); // Adjust the delay if needed

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);

    const content = contentRefs.current[index];

    if (newExpanded[index]) {
      content.style.display = "block"; // Make sure the content is visible before animating
      const contentHeight = content.scrollHeight;
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: contentHeight,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            content.style.height = "auto"; // Set height to auto after animation for responsiveness
          },
        }
      );
      gsap.to(iconRefs.current[index], {
        rotation: 45,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          content.style.display = "none"; // Hide the content after collapsing
        },
      });
      gsap.to(iconRefs.current[index], {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div>
      <PageTitle title="Chat History" />
      <Grid container>
        <Grid item xs={12} md={6}>
          <SearchField placeholderText="Search past conversations" />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {chatHistory.map(({ title, description }, index) => (
            <Card
              key={index}
              sx={{ p: 3, mb: 1, overflow: "hidden", position: "relative" }}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              {loading && (
                <Card
                  sx={{ border: "none" }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    paddingLeft: "24px", // Align with the text
                    display: "flex",
                    alignItems: "center",
                    zIndex: 2,
                  }}
                >
                  <Skeleton variant="text" width="40%" />
                </Card>
              )}
              <Stack flexDirection="row" alignItems="center">
                <Stack sx={{ flexGrow: 1 }}>
                  <Typography>{title}</Typography>
                </Stack>
                <Stack>
                  <IconButton
                    onClick={() => toggleExpand(index)}
                    ref={(el) => (iconRefs.current[index] = el)}
                  >
                    <PlusIcon stroke={theme.palette.primary.main} />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack
                ref={(el) => (contentRefs.current[index] = el)}
                sx={{
                  height: 0,
                  overflow: "hidden",
                  opacity: 0,
                  display: "none",
                }}
              >
                <Stack>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {description}
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatHistory;
