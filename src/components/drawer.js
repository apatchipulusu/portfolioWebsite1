import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import FolderIcon from "@material-ui/icons/Folder";
import HomeIcon from "@material-ui/icons/Home";

import BallotIcon from "@material-ui/icons/Ballot";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
});

export default function TemporaryDrawer({ state, toggle }) {
  const classes = useStyles();
  const list = () => (
    <div
      role="presentation"
      className={classes.list}
      onClick={toggle(false)}
      onKeyDown={toggle(false)}
    >
      <List>
        <ListItem button key={"Home"} component={Link} to={"/"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button key={"About Me"} component={Link} to={"/aboutme"}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"About Me"} />
        </ListItem>
        <ListItem button key={"Resume"} component={Link} to={"/resume"}>
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <ListItemText primary={"Resume"} />
        </ListItem>
        <ListItem button key={"Projects"} component={Link} to={"/projects"}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>
        <ListItem button key={"Connect"} component={Link} to={"/connect"}>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary={"Connect"} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <Drawer anchor={"left"} open={state["drawer"]} onClose={toggle(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
