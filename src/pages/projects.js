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
    minHeight: 340,
    margin: "1em 1em",
  },
  media: {
    height: 200,
  },
  codeButton: {
    margin: "auto",
  },
});

function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2}></Grid>
        <Grid
          item
          container
          xs={10}
          sm={8}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.root}>
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
                This website created using React.js and Material-UI
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                className={classes.codeButton}
                size="small"
                color="primary"
                disabled={true}
              >
                Link to code coming soon
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Electric Longboard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Researched and built a custom electric longboard
              </Typography>
            </CardContent>

            <CardActions>
              {/* <Button
                className={classes.codeButton}
                size="small"
                color="primary"
              >
                See Code on Github
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default Projects;
