import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Connect from "./connect";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/connect" component={Connect} />
  </Switch>
);

export default Main;
