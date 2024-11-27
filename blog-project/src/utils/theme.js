import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 900,
      lg: 1280, //1200 -> 1280으로 변경
      xl: 1536,
    },
  },
});

export default theme;
