import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card1: {
    marginBottom: "2em",
    backgroundColor: "rgb(255, 255, 255)",
    opacity: "0.8",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "4px",
  },
  card2: {
    marginBottom: "2em",
    backgroundColor: "rgb(225, 225, 225)",
    opacity: "10.8",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "4px",
  },
  skillcard: {
    marginBottom: "1em",
    backgroundColor: "rgb(225, 225, 225)",
    opacity: "10.8",
    width: "auto",
    maxWidth: "20em",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "4px",
    whiteSpace: "nowrap",
  },
  content: { paddingBottom: "10px" },
  title: {
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },
  sectionTitle: {
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  skillContent: {
    paddingBottom: "0px",
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.card1}>
            <CardContent>
              <Typography className={classes.title} variant="h2">
                Education
              </Typography>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.sectionTitle} variant="h4">
                    University of Nebraska-Lincoln
                  </Typography>
                  <Typography className={classes.content} variant="h6">
                    Bachelor of Science in Computer Engineering
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    GPA: 3.763 | Minor: Business | Expected Graduation: May 2021
                  </Typography>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card1}>
            <CardContent>
              <Typography className={classes.title} variant="h2">
                Experience and Leadership
              </Typography>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.sectionTitle} variant="h4">
                    Data Management and Systems Integration Intern
                  </Typography>
                  <Typography className={classes.content} variant="h6">
                    Allo Communications - A Nelnet Company | June 2020 - Present
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Learned cutting-edge development technologies such as
                    React js
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Worked with stakeholders to derive project requirements
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Worked with team to develop an excellent customer
                    experience
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.sectionTitle} variant="h4">
                    Vice President
                  </Typography>
                  <Typography className={classes.content} variant="h6">
                    Triangle Fraternity of Nebraska | September 2019 - Present
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Ensured accountability of other positions
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Managed Alumni relations
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Ensured member satisfaction by adapting to every
                    individual's needs
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.sectionTitle} variant="h4">
                    Lot Porter
                  </Typography>
                  <Typography className={classes.content} variant="h6">
                    Baxter Volkswagen of Omaha | May 2019 - August 2019
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Managed prompt movement of vehcles through service center
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Received and inspected new vehicles prior to delivery
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Performed various tasks to ensure customer satisfaction
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.sectionTitle} variant="h4">
                    Treasurer
                  </Typography>
                  <Typography className={classes.content} variant="h6">
                    Triangle Fraternity of Nebraska | August 2018 - September
                    2019
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Kept careful account of finances
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Collected dues and planned budgets for events
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Ensured member satisfaction by adapting to every
                    individual's needs
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.sectionTitle} variant="h4">
                    Secretary
                  </Typography>
                  <Typography className={classes.content} variant="h6">
                    Triangle Fraternity of Nebraska | August 2017 - Augusr 2018
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Took meeting minutes and distributed important information
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    ○ Headed the judicial board as needed
                  </Typography>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container xs={12}>
          <Card className={classes.card1}>
            <CardContent>
              <Typography className={classes.title} variant="h2">
                Skills
              </Typography>

              <Grid
                container
                spacing={3}
                style={{
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {[
                  "C",
                  "Java",
                  "Embedded C",
                  "SQL",
                  "GIT",
                  "PCB Design",
                  "Robot-OS",
                  "Computer Hardware",
                  "Javascript",
                  "React.js",
                ].map((skill) => (
                  <React.Fragment key={skill}>
                    <Grid item xs>
                      <Card className={classes.skillcard}>
                        <CardContent>
                          <Typography
                            className={classes.skillContent}
                            variant="h5"
                          >
                            {skill}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
              <Typography className={classes.sectionTitle} variant="h4">
                Exposure
              </Typography>
              <Grid
                container
                spacing={3}
                style={{
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {[
                  "C++",
                  "Python",
                  "Linux",
                  "Assembly",
                  "VHDL",
                  "3D Printing",
                  "Altium Designer",
                ].map((skill) => (
                  <React.Fragment key={skill}>
                    <Grid item xs>
                      <Card className={classes.skillcard}>
                        <CardContent>
                          <Typography
                            className={classes.skillContent}
                            variant="h5"
                          >
                            {skill}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
