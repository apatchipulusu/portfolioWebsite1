import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "./../logo512.png";

const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    height: 200,
  },
  codeButton: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item container xs={10} sm={8}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Portfio Project
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This website created using React.js
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.codeButton}
                size="small"
                color="primary"
              >
                See Code on Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default Projects;
