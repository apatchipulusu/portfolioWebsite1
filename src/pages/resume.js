import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  card1: {
    marginBottom: "2em",
    backgroundColor: "rgb(255, 255, 255)",
    opacity: "0.8",
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
  },
  card2: {
    marginBottom: "2em",
    backgroundColor: "rgb(225, 225, 225)",
    opacity: "10.8",
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
  },
  skillcard: {
    marginBottom: "2em",
    backgroundColor: "rgb(225, 225, 225)",
    opacity: "10.8",
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
  },
  content: {
    paddingBottom: "15px",
  },
});

function Resume() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.card1}>
            <CardContent>
              <Typography className={classes.content} variant="h2">
                Education
              </Typography>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.content} variant="h4">
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
              <Typography className={classes.content} variant="h2">
                Experience and Leadership
              </Typography>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.content} variant="h4">
                    Data Management and Systems Integration Intern
                  </Typography>
                  <Typography className={classes.content} variant="h6">
                    Allo Communications - A Nelnet Company | June 1, 2020 -
                    August 14, 2020
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    blah blah blah
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.content} variant="h4">
                    Vice President at Triangle Fraternity
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    blah blah blah
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.content} variant="h4">
                    Lot Porter At Baxter Auto
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    blah blah blah
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography className={classes.content} variant="h4">
                    Treasurer at Triangle Fraternity
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1">
                    blah blah blah
                  </Typography>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container xs={12}>
          <Card className={classes.card1}>
            <CardContent>
              <Typography className={classes.content} variant="h2">
                Skills
              </Typography>
              <Typography className={classes.content} variant="h4">
                Proficient
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
                          <Typography variant="h5">{skill}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
              <Typography className={classes.content} variant="h4">
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
                          <Typography variant="h5">{skill}</Typography>
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
