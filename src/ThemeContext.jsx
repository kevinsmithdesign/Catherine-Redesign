import React, { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("#3653B0");
  const [secondaryColor, setSecondaryColor] = useState("#999");

  const [botBubbleText, setBotBubbleText] = useState("#fff");
  const [userBubbleText, setUserBubbleText] = useState("#fff");

  const updatePrimaryColor = (color) => {
    setPrimaryColor(color);
  };

  const updateSecondaryColor = (color) => {
    setSecondaryColor(color);
  };

  const updateBotBubbleText = (color) => {
    setBotBubbleText(color);
  };

  const updateUserBubbleText = (color) => {
    setUserBubbleText(color);
  };

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? savedMode : "light";
  });

  const [typographySize, setTypographySize] = useState(16);
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [fontWeight, setFontWeight] = useState("normal");

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: primaryColor,
          },
          secondary: {
            main: secondaryColor,
          },
          error: {
            main: "#D22630",
          },
          mode,
          background: {
            default: mode === "light" ? "#ffffff" : "#111111",
          },
          text: {
            primary: mode === "light" ? "#000000" : "#ffffff",
            bot: botBubbleText,
            user: userBubbleText,
          },
        },
        typography: {
          fontSize: typographySize,
          fontFamily,
          fontWeight,
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                boxShadow: "none",
                border: mode === "light" ? "1px solid #DFE4F3" : "none",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                boxShadow: "none",
                textTransform: "none",
                borderRadius: 8,
                padding: 16,
                "&:hover": {
                  boxShadow: "none",
                },
                "&:active": {
                  boxShadow: "none",
                },
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                // backgroundColor: mode === "light" ? "#f0f0f0" : "#333333",
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: 8, // Custom borderRadius here
                backgroundColor: mode === "light" ? "#f0f0f0" : "#333333",
              },
              notchedOutline: {
                borderColor: mode === "light" ? "#1A56DB33" : "#1A56DB33",
                borderWidth: "0px",
              },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              input: {
                "&::placeholder": {
                  fontSize: "14px",
                  color: mode === "light" ? "#999" : "#fff",
                  opacity: 1, // Ensure the color is fully applied
                },
              },
            },
          },
        },
      }),
    [
      primaryColor,
      secondaryColor,
      userBubbleText,
      botBubbleText,
      mode,
      typographySize,
      fontFamily,
      fontWeight,
    ]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const toggleFontFamily = () => {
    setFontFamily((prevFamily) =>
      prevFamily === "sans-serif" ? "serif" : "sans-serif"
    );
  };

  const toggleFontWeight = () => {
    setFontWeight((prevWeight) => (prevWeight === "bold" ? "normal" : "bold"));
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
        typographySize,
        setTypographySize,
        fontFamily,
        toggleFontFamily,
        fontWeight,
        toggleFontWeight,
        setPrimaryColor: updatePrimaryColor,
        setSecondaryColor: updateSecondaryColor,
        setBotBubbleText: updateBotBubbleText,
        setUserBubbleText: updateUserBubbleText,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
