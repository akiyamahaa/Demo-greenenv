import React from "react";
import JoinInvitation from "./components/JoinInvitation";
import CommonQuestions from "./components/CommonQuestions";
import CollaborationInvitation from "./components/CollaborationInvitation";
import { makeStyles } from "tss-react/mui";

const Contact = () => {
  const { classes } = useStyles();

  return (
    <main className={classes.contactScreen}>
      <JoinInvitation />
      <CommonQuestions />
      <CollaborationInvitation />
    </main>
  );
};

const useStyles = makeStyles()((theme) => ({
  contactScreen: {
    display: "flex",
    flexDirection: "column",
    gap: 144,
    margin: "144px 0",
  },
}));

export default Contact;
