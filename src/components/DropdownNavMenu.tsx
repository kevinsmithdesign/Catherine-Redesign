// import React from "react";
// import { Card, Stack, Typography } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";

// const DropdownNavMenu = ({ setMenuOpen }) => {
//   const location = useLocation();

//   const links = [
//     { to: "/", label: "Chat" },
//     { to: "/chat-history", label: "Chat History" },
//     { to: "/about", label: "About" },
//     { to: "/prompts", label: "Prompts" },
//     { to: "/profile", label: "Profile" },
//     { to: "/contact", label: "Contact" },
//     { to: "/settings", label: "Settings" },
//     { to: "/privacy", label: "Privacy" },
//   ];

//   const handleLinkClick = () => {
//     setMenuOpen(false); // Close the menu when a link is clicked
//   };

//   return (
//     <Card
//       sx={{
//         width: "200px",
//         borderRadius: "20px",
//         position: "absolute",
//         zIndex: 100,
//         right: 0,
//         p: 2,
//       }}
//     >
//       {links.map((link) => (
//         <Link
//           key={link.to}
//           to={link.to}
//           style={{ textDecoration: "none" }}
//           onClick={handleLinkClick} // Add onClick to close menu
//         >
//           <Typography
//             sx={{
//               p: 1,
//               borderRadius: "10px",
//               backgroundColor:
//                 location.pathname === link.to ? "#3856AE" : "transparent",
//               color: location.pathname === link.to ? "white" : "#111",
//               "&:hover": {
//                 backgroundColor: "#ddd",
//                 color: "#111",
//               },
//             }}
//           >
//             {link.label}
//           </Typography>
//         </Link>
//       ))}
//     </Card>
//   );
// };

// export default DropdownNavMenu;

import React from "react";
import { Card, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const DropdownNavMenu = ({ setMenuOpen }) => {
  const location = useLocation();
  const theme = useTheme();

  const links = [
    { to: "/", label: "Chat" },
    { to: "/chat-history", label: "Chat History" },
    { to: "/about", label: "About" },
    { to: "/prompts", label: "Prompts" },
    { to: "/profile", label: "Profile" },
    { to: "/contact", label: "Contact" },
    { to: "/settings", label: "Settings" },
    // { to: "/privacy", label: "Privacy" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Card
      sx={{
        width: "200px",
        borderRadius: "20px",
        position: "absolute",
        zIndex: 100,
        right: 16,
        p: 2,
        backgroundColor: theme.palette.background.paper,
        // border: theme.palette.mode === 'light' ? '1px solid #DFE4F3' : ''
        border: "1px solid #DFE4F3",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          style={{ textDecoration: "none" }}
          onClick={handleLinkClick} // Add onClick to close menu
        >
          <Typography
            sx={{
              p: 1,
              borderRadius: "10px",
              backgroundColor:
                location.pathname === link.to
                  ? theme.palette.primary.main
                  : "transparent",
              color:
                location.pathname === link.to
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
                color: theme.palette.text.primary,
              },
            }}
          >
            {link.label}
          </Typography>
        </Link>
      ))}
    </Card>
  );
};

export default DropdownNavMenu;
