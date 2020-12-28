import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export default makeStyles((theme) => {
  theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return {
    desktop: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    mobile: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    main: {
      [theme.breakpoints.up("sm")]: {
        paddingBottom: "5%",
      },
    },
    last: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3),
        paddingBottom: "200px",
      },
    },
    grid: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  };
});
