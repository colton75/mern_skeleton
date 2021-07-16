import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import unicornbikeImg from "../../assets/images/unicornbike.jpg";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
}));
