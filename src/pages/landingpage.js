import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import image from "./../IMG_2038.jpg";

const useStyles = makeStyles({
  landingbanner: {
    backgroundColor: "white",
    opacity: "0.8",
    width: "75%",
    margin: "auto",
    borderRadius: "10px",
  },
  img: {
    height: "25em",
    borderRadius: "10px",
    maxWidth: "100%",
    marginBottom: "3em",
  },
  content: {
    paddingBottom: "15px",
  },
});

function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={12}>
          <img src={image} alt="avatar" className={classes.img} />
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.landingbanner}>
            <CardContent>
              <Typography className={classes.content} variant="h2">
                Anirudh Patchipulusu
              </Typography>
              <Typography className={classes.content} variant="subtitle1">
                Computer Engineering Student from the University of
                Nebraska-Lincoln
              </Typography>
              <Typography className={classes.content} variant="subtitle1">
                Elective Vehicles, Consumer Electronics, Finance, and Stock
                Market Enthusiast
              </Typography>
              <Typography className={classes.content} variant="h4">
                True Full Stack Exposure
              </Typography>
              <Typography variant="subtitle1">
                Circuit Design ○ Digital Logic ○ Embedded Systems ○ Database
                Systems ○ Software Engineering ○ Web Development
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={1}></Grid> */}
      </Grid>
    </div>
  );
}

export default LandingPage;
