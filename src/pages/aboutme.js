import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  landingbanner: {
    backgroundColor: "white",
    opacity: "0.8",
    width: "75%",
    margin: "auto",
    borderRadius: "10px",
  },
  content: {
    paddingBottom: "15px",
  },
});

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
                Computer Engineering Student from the University of
                Nebraska-Lincoln
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
