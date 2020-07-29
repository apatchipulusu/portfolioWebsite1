import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: "white",
    opacity: "0.8",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    margin: "auto",
    borderRadius: "4px",
  },
  content: {
    paddingBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    marginLeft: "auto",
    marginRight: "auto",
  },
  icons: {
    fontSize: 60,
  },
  social: {
    marginTop: "15px",
    marginRight: "auto",
  },
}));

function Connect() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.banner}>
        <CardContent>
          <Typography className={classes.content} variant="h2">
            Connect With Me!
          </Typography>
          <Typography className={classes.content} variant="subtitle1">
            If you have any questions about my skills, experience, services, or
            just want to say hello, feel free to get in touch with me. Ways to
            connect with me are provided:
          </Typography>
          <IconButton
            style={{ marginLeft: "auto" }}
            edge="start"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/anirudh.patchipulusu"
          >
            <FacebookIcon className={classes.icons} />
          </IconButton>
          <IconButton
            style={{ marginLeft: "auto" }}
            edge="start"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ani_pat_chip/?hl=en"
          >
            <InstagramIcon className={classes.icons} />
          </IconButton>
          <IconButton
            style={{ marginLeft: "auto" }}
            edge="start"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anirudh-patchipulusu-84a524155"
          >
            <LinkedInIcon className={classes.icons} />
          </IconButton>
          <IconButton
            style={{ marginLeft: "auto" }}
            edge="start"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/apatchipulusu"
          >
            <GitHubIcon className={classes.icons} />
          </IconButton>
          <IconButton
            style={{ marginLeft: "auto" }}
            edge="start"
            color="inherit"
            href="mailto:apatchipulusu@huskers.unl.edu"
          >
            <MailOutlineIcon className={classes.icons} />
          </IconButton>
          <Typography className={classes.content} variant="h6">
            Email: apatchipulusu@huskers.unl.edu
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Connect;
