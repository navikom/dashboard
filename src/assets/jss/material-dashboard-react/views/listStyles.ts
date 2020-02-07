import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { whiteColor } from "assets/jss/material-dashboard-react";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: "center",
      textAlign: "center",
    },
    button: {
      color: whiteColor,
      opacity: .7,
      "&:hover": {
        opacity: .9
      }
    },
    buttonAdd: {
      marginTop: theme.typography.pxToRem(20)
    }
  }));
