import React, { useState, useEffect, useRef } from "react";
import {
  Stack,
  Typography,
  Card,
  Grid,
  TextField,
  Skeleton,
} from "@mui/material";
import PageTitle from "../components/PageTitle";
import SecondaryPageTitle from "../components/SecondaryPageTitle";
import { gsap } from "gsap";
import SearchField from "../components/SearchField";

const allPrompts = [
  {
    type: "Dementia & Orthopedic",
    title:
      "How does dementia increase the risk of falls? What preventative measures can be taken?",
    description: "Lorem ipsum dolor hair",
  },
  {
    type: "Dementia",
    title:
      "How does dementia increase the risk of falls? What preventative measures can be taken?",
    description: "Lorem ipsum dolor hair",
  },
  {
    type: "Orthopedic",
    title:
      "How does dementia increase the risk of falls? What preventative measures can be taken?",
    description: "Lorem ipsum dolor hair",
  },
  {
    type: "Orthopedic",
    title:
      "How does dementia increase the risk of falls? What preventative measures can be taken?",
    description: "Lorem ipsum dolor hair",
  },
  {
    type: "Dementia",
    title:
      "How does dementia increase the risk of falls? What preventative measures can be taken?",
    description: "Lorem ipsum dolor hair",
  },
  {
    type: "Orthopedic",
    title:
      "How does dementia increase the risk of falls? What preventative measures can be taken?",
    description: "Lorem ipsum dolor hair",
  },
];

const Prompts = () => {
  const [loading, setLoading] = useState(true);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  useEffect(() => {
    if (!loading) {
      // Animate the cards in with a staggered effect after loading
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }
  }, [loading]);

  const renderSkeletons = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <Grid item xs={6} md={4} key={index}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            p: 3,
          }}
        >
          <Stack mb={2}>
            <Skeleton variant="text" width="60%" />
          </Stack>
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="80%" />
        </Card>
      </Grid>
    ));
  };

  const renderCards = (prompts, startIndex) => {
    return prompts.map(({ title, description, type }, index) => (
      <Grid item xs={6} md={4} key={index + startIndex}>
        <Card
          ref={(el) => {
            cardRefs.current[index + startIndex] = el;
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            p: 3,
            opacity: 0, // Initial state for GSAP animation
          }}
        >
          <Typography fontWeight="bold" mb={2}>
            {type}
          </Typography>
          <Typography>{title}</Typography>
        </Card>
      </Grid>
    ));
  };

  return (
    <div>
      <PageTitle title="Prompts" />
      <Grid container>
        <Grid item md={6} xs={12}>
          <SearchField placeholderText="Search prompts" />
        </Grid>
        <Grid item md={6} xs={12}></Grid>
      </Grid>

      <SecondaryPageTitle title="Popular Prompts" />

      <Grid container spacing={1} mb={4}>
        {loading ? renderSkeletons() : renderCards(allPrompts, 0)}
      </Grid>

      <SecondaryPageTitle title="Orthopedic Prompts" />

      <Grid container spacing={1} mb={4}>
        {loading
          ? renderSkeletons()
          : renderCards(allPrompts, allPrompts.length)}
      </Grid>

      <SecondaryPageTitle title="Dementia Prompts" />

      <Grid container spacing={1} mb={4}>
        {loading
          ? renderSkeletons()
          : renderCards(allPrompts, allPrompts.length * 2)}
      </Grid>
    </div>
  );
};

export default Prompts;
