// import React from "react";
// import { Stack, Typography, Card, Grid, TextField } from "@mui/material";
// import PageTitle from "../components/PageTitle";
// import SecondaryPageTitle from "../components/SecondaryPageTitle";

// const faq = [
//   {
//     title: "Why should I use Catherine?",
//     description: "Lorem ipsum dolor hair",
//   },
//   {
//     title: "Is what I share with Catherine confidential?",
//     description: "Lorem ipsum dolor hair",
//   },
//   { title: "How can Catherine help?", description: "Lorem ipsum dolor hair" },
//   { title: "How does Catherine work?", description: "Lorem ipsum dolor hair" },
//   {
//     title: "Why should I talk to Catherine?",
//     description: "Lorem ipsum dolor hair",
//   },
//   {
//     title:
//       "What are the benefits of registering with Catherine vs being a guest?",
//     description: "Lorem ipsum dolor hair",
//   },
//   {
//     title: "What resources does Catherine guide me to?",
//     description: "Lorem ipsum dolor hair",
//   },
//   {
//     title: "Who Invented Catherine?",
//     description: "Lorem ipsum dolor hair",
//   },
// ];

// const About = () => {
//   return (
//     <div>
//       <PageTitle
//         title="Connecting you to good help
// and good health."
//       />
//       <Typography mb={4}>
//         Welcome to Catherine, the healthcare app specializing in tailored
//         conversations and support for Dementia and Orthopedic care. Our mission
//         is to provide personalized and compassionate interactions that cater to
//         your unique needs. Catherine is designed to engage with you in a way
//         that feels almost entirely human, making your healthcare journey more
//         efficient and supportive. Stay tuned as we expand our specialties to
//         offer even more comprehensive care soon!
//       </Typography>

//       <SecondaryPageTitle title="Frequently Asked Questions" />

//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           {faq.map(({ title, description }) => (
//             <Card sx={{ p: 3, mb: 1 }}>{title}</Card>
//           ))}
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default About;

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
import SecondaryPageTitle from "../components/SecondaryPageTitle";

import PlusIcon from "../icons/PlusIcon";
import { gsap } from "gsap";

const faq = [
  {
    title: "Why should I use Catherine?",
    description: "Lorem ipsum dolor hair",
  },
  {
    title: "Is what I share with Catherine confidential?",
    description: "Lorem ipsum dolor hair",
  },
  { title: "How can Catherine help?", description: "Lorem ipsum dolor hair" },
  { title: "How does Catherine work?", description: "Lorem ipsum dolor hair" },
  {
    title: "Why should I talk to Catherine?",
    description: "Lorem ipsum dolor hair",
  },
  {
    title:
      "What are the benefits of registering with Catherine vs being a guest?",
    description: "Lorem ipsum dolor hair",
  },
  {
    title: "What resources does Catherine guide me to?",
    description: "Lorem ipsum dolor hair",
  },
  {
    title: "Who Invented Catherine?",
    description: "Lorem ipsum dolor hair",
  },
];

const About = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(Array(faq.length).fill(false));
  const [loading, setLoading] = useState(true); // Loading state
  const iconRefs = useRef([]);
  const contentRefs = useRef([]);
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
        { transform: "translateY(20px)", opacity: 0 },
        {
          transform: "translateY(0px)",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      // Gradually fade out the skeletons
      cardRefs.current.forEach((card) => {
        gsap.to(card.querySelectorAll(".skeleton"), {
          opacity: 0,
          duration: 0.3,
          delay: 0.1, // Delay slightly after card animation starts
        });
      });
    }
  }, [loading]);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);

    const content = contentRefs.current[index];

    if (newExpanded[index]) {
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: content.scrollHeight,
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

      // Stagger the fade-in effect for the text lines
      gsap.fromTo(
        content.children,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
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
      <PageTitle title="Connecting you to good help and good health." />
      <Typography mb={4}>
        Welcome to Catherine, the healthcare app specializing in tailored
        conversations and support for Dementia and Orthopedic care. Our mission
        is to provide personalized and compassionate interactions that cater to
        your unique needs. Catherine is designed to engage with you in a way
        that feels almost entirely human, making your healthcare journey more
        efficient and supportive. Stay tuned as we expand our specialties to
        offer even more comprehensive care soon!
      </Typography>
      <SecondaryPageTitle title="Frequently Asked Questions" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {loading ? (
            <>
              <Card sx={{ p: 3, mb: 1, overflow: "hidden" }}>
                <Skeleton variant="text" width="60%" />
              </Card>
              <Card sx={{ p: 3, mb: 1, overflow: "hidden" }}>
                <Skeleton variant="text" width="60%" />
              </Card>
              <Card sx={{ p: 3, mb: 1, overflow: "hidden" }}>
                <Skeleton variant="text" width="60%" />
              </Card>
              <Card sx={{ p: 3, mb: 1, overflow: "hidden" }}>
                <Skeleton variant="text" width="60%" />
              </Card>
              <Card sx={{ p: 3, mb: 1, overflow: "hidden" }}>
                <Skeleton variant="text" width="60%" />
              </Card>
              <Card sx={{ p: 3, mb: 1, overflow: "hidden" }}>
                <Skeleton variant="text" width="60%" />
              </Card>
            </>
          ) : (
            faq.map(({ title, description }, index) => (
              <Card
                key={index}
                sx={{ p: 3, mb: 1, overflow: "hidden" }}
                ref={(el) => (cardRefs.current[index] = el)}
              >
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
                  sx={{ opacity: 0 }} // Initially hide content
                >
                  <Stack>
                    {/* Show content only when expanded */}
                    {expanded[index] && (
                      <Typography variant="body2" sx={{ mt: 2 }}>
                        {description}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </Card>
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
