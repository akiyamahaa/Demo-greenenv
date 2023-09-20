import React from "react";
import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

type Props = {
  className?: string;
};

const Home = (props: Props) => {
  // const { className } = props;
  const { classes } = useStyles();
  return <div className={classes.root}>Home</div>;
};

export default Home;

const useStyles = makeStyles()((theme) => ({
  root: {
    "&:hover": {
      border: "4px solid black",
    },
    [theme.breakpoints.up("md")]: {
      border: "10px solid cyan",
    },
    color: "red",
  },  
}));
