import React, { useState, useEffect, useContext } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import DropdownNavMenu from "../components/DropdownNavMenu";
import HamburgerMenu from "../components/HamburgerMenu";
import LightDarkModeToggle from "../components/LightDarkModeToggle";
import TypeSizeAdjuster from "../components/TypeSizeAdjuster";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typeAdjustOpen, setTypeAdjustOpen] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    if (menuOpen) {
      setTypeAdjustOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (typeAdjustOpen) {
      setMenuOpen(false);
    }
  }, [typeAdjustOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleTypeAdjuster = () => {
    setTypeAdjustOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Nav */}
      <Stack
        flexDirection="row"
        alignItems="center"
        sx={{
          p: 2,
          maxWidth: "100%",
          width: "1286px",
          mx: "auto",
        }}
      >
        <Stack sx={{ flexGrow: 1 }}>
          <Stack flexDirection="row">
            <img
              src="https://assets.codepen.io/2392702/Icon.svg"
              alt="Catherine Logo Mark"
              width="40px"
            />
            <Typography
              sx={{
                ml: 1,
                mt: 1,
                fontSize: "28px",
                fontFamily: "sans-serif",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "#ffffff",
              }}
            >
              Catherine
            </Typography>
          </Stack>
        </Stack>
        <Stack mr={3} alignItems="center" justifyContent="center">
          <Stack
            onClick={toggleTypeAdjuster}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            <Typography sx={{ fontSize: "24px" }}>T</Typography>
          </Stack>
        </Stack>
        <Stack mr={3}>
          <LightDarkModeToggle />
        </Stack>
        <Stack>
          <HamburgerMenu
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </Stack>
      </Stack>

      {/* Dropdown Menu & TypeSizeAdjuster Container.  */}
      <Stack
        flexDirection="row"
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1286px",
          mx: "auto",
        }}
      >
        {menuOpen && (
          <DropdownNavMenu
            setMenuOpen={setMenuOpen}
            sx={{
              position: "absolute",
              top: "50px",
              right: "0px",
              zIndex: 1000,
            }}
          />
        )}

        {typeAdjustOpen && (
          <TypeSizeAdjuster
            setTypeAdjustOpen={setTypeAdjustOpen}
            sx={{
              position: "absolute",
              top: "50px",
              right: "0px",
              zIndex: 1000,
            }}
          />
        )}
      </Stack>
    </>
  );
};

export default Navbar;
