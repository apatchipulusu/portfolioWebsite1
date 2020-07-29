import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import image from "./../IMG_2038.jpg";

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
    marginBottom: "4em",
  },
  img: {
    height: "400px",
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      width: "75%",
      maxWidth: "19em",
    },
    [theme.breakpoints.up("sm")]: {
      width: "19em",
    },
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3em",
  },
  content: {
    paddingBottom: "15px",
  },
  name: {
    paddingBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia className={classes.img} image={image} />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.landingbanner}>
            <CardContent>
              <Typography className={classes.name} variant="h2">
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
              <Typography className={classes.name} variant="h2">
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
