import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./drawer.js";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "3em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    marginRight: "auto",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drawer: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, drawer: open });
  };
  return (
    <div className={classes.root}>
      <TemporaryDrawer state={state} toggle={toggleDrawer} />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Button
            color="inherit"
            className={classes.title}
            component={Link}
            to={"/"}
          >
            Anirudh Patchipulusu
          </Button>
          <Hidden smDown>
            <Button color="inherit" component={Link} to={"/aboutme"}>
              About Me
            </Button>
            <Button color="inherit" component={Link} to={"/resume"}>
              Resume
            </Button>
            <Button color="inherit" component={Link} to={"/projects"}>
              Projects
            </Button>

            <Button color="inherit" component={Link} to={"/connect"}>
              Connect
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
