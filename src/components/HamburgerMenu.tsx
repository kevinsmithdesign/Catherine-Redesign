import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { gsap } from "gsap";

const HamburgerMenu = ({ toggleMenu, menuOpen, setMenuOpen }) => {
  //   const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    if (menuOpen) {
      tl.to(".bar-one", { y: 6, rotation: 45, duration: 0.3 })
        .to(".bar-two", { opacity: 0, duration: 0 }, "-=0.3")
        .to(".bar-three", { y: -6, rotation: -45, duration: 0.3 }, "-=0.3")
        .to(".slideout-nav", { x: 0, duration: 0.3 }, "-=0.3");
    } else {
      tl.to(".bar-one", { y: 0, rotation: 0, duration: 0.3 })
        .to(".bar-two", { opacity: 1, duration: 0 }, "-=0.3")
        .to(".bar-three", { y: 0, rotation: 0, duration: 0.3 }, "-=0.3")
        .to(".slideout-nav", { x: 300, duration: 0.3 }, "-=0.3");
    }
  }, [menuOpen]);

  const handleHamburgerMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "36px",
        height: "36px",
        background: theme.palette.primary.main,
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          //   width: "65px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={handleHamburgerMenu}
      >
        <Box
          sx={{
            cursor: "pointer",
          }}
        >
          <Box
            className="bar-one"
            sx={{
              height: "3px",
              width: "20px",
              backgroundColor: "#fff",
              marginBottom: "3px",
              borderRadius: "2px",
            }}
          />
          <Box
            className="bar-two"
            sx={{
              height: "3px",
              width: "20px",
              backgroundColor: "#fff",
              marginBottom: "3px",
              borderRadius: "2px",
            }}
          />
          <Box
            className="bar-three"
            sx={{
              height: "3px",
              width: "20px",
              backgroundColor: "#fff",
              borderRadius: "2px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HamburgerMenu;
