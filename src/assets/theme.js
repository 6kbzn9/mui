import { createTheme } from "@mui/material";
import { purple, orange, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[600],
    },
    secondary: {
      main: orange[700],
    },
    error: {
      main: red[900],
    },
  },

  components: {
    MuiFab: {
      styleOverrides: {
        secondary: {
          "&:hover": {
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
