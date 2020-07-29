import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landingbanner: {
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
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function AboutMe() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.landingbanner}>
            <CardContent>
              <Typography className={classes.content} variant="h2">
                About Me
              </Typography>
              <Typography className={classes.content} variant="subtitle1">
                Hello, my name is Anirudh Patchipulusu. I am from Omaha,
                Nebraska, and I am currently studying at the University of
                Nebraska-Lincoln. I am a senior Computer Engineering student
                with a Minor in Business. I indend on graduating in May 2021,
                although i'm considering taking an additional semester. I have
                an incredible facination with technology and finance, and hope
                to one day lead a technology business to succcess. In the short
                term, I wish to gain experience working at highly innovative and
                fast paced companies to experience everything that the cutting
                edge of technology has to offer. I am a huge fan of innovation
                and disruptive technologies and love to work among motivated and
                driven people with similar values and interests.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
