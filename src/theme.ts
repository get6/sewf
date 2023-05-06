import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import React from "react";
import { useMediaQuery } from "@mui/material";

// A custom theme for this app
// const theme = () => {
//   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
//   return React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode: prefersDarkMode ? "dark" : "light",
//           primary: {
//             main: "#556cd6",
//           },
//           secondary: {
//             main: "#19857b",
//           },
//           error: {
//             main: red.A400,
//           },
//         },
//       }),
//     [prefersDarkMode]
//   );
// };

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default theme;
