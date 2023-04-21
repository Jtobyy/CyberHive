import { Box, Card, CardMedia, CardContent, Stack, Button, CardActionArea, BottomNavigation, Grid, Tab, Tabs, Typography, BottomNavigationAction } from "@mui/material"
import React from "react";
import PropTypes from 'prop-types';
import pro1 from '../assets/pro1.png';
import badge3 from "../assets/badge3.png";
import pro2 from '../assets/pro2.png';
import clock from "../assets/clock.svg";
import cloud3 from "../assets/cloud3.png";
import {Link} from "react-router-dom";

const myCourses = {
    all:  [
      {
          img: pro1,
          title: "Cyber Security, Frameworks, Technologies.",
          time: "35hrs",
          level: "Beginner",
          courseId: "1",
      },{
          img: pro2,
          title: "Ethical Hacking & Financial Security.",
          time: "33hrs",
          level: "Intermediate",
          courseId: "2",
      },{
          img: badge3,
          title: "Cyber security Fundamentals/frameworks.",
          time: "2hrs",
          level: "Intermediate",
          courseId: "3",
      }
    ],
    completed:  [
     {
          img: badge3,
          title: "Cyber security Fundamentals/frameworks.",
          time: "2hrs",
          level: "Intermediate",
          courseId: "3",
      }
    ],
    saved:  [
      {
        img: pro1,
        title: "Network Defense.",
        time: "35hrs",
        level: "Beginner",
        courseId: "4",
      },{
        img: cloud3,
        title: "Devops Processes.",
        time: "12hrs",
        level: "Intermediate",
        courseId: "5",
      }
     ]
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export default function Learning() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <>
            <Box color="black" p={3}>
                <Typography fontWeight="bold" variant="h5" >All courses</Typography>
                <Box sx={{ width: '80vw' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#1B065E' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Your courses" {...a11yProps(0)} />
                            <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="Completed course" {...a11yProps(1)} />
                            <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="Saved courses" {...a11yProps(2)} />
                        </Tabs>
                    </Box>

                    <TabPanel value={value} index={0}>
                        <Grid container spacing={{xs: 5, md: 8}} >
                            {myCourses.all.map((course) => {
                                return (
                                    <Grid item xs={12} md={4}>
                                        <Card >
                                            <CardMedia component='img'
                                            src={course.img}
                                            height="250"
                                            alg=""
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{course.title}</Typography>
                                                <Box my={1} width="80%" display="flex" justifyContent='space-between'>
                                                    <Stack direction="row" alignItems='center' spacing={1}>
                                                        <Box component='img' src={clock} />    
                                                        <Typography variant="body2">{course.time}</Typography>    
                                                    </Stack>    
                                                    <Typography variant="body2">{course.level}</Typography>
                                                </Box>
                                                <Link to="/courses/1">
                                                    <Button sx={{borderRadius: '5px',  width: "100%", textTransform: 'none', backgroundColor: '#FF499E'}}>Start</Button>
                                                </Link>
                                                
                                            </CardContent>
                                            <CardActionArea>

                                            </CardActionArea>
                                        </Card>    
                                    </Grid>    
                                )
                            })}
                        </Grid>                        
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                      <Grid container spacing={{xs: 5, md: 8}} >
                              {myCourses.completed.map((course) => {
                                  return (
                                      <Grid item xs={12} md={4}>
                                          <Card >
                                              <CardMedia component='img'
                                              src={course.img}
                                              height="250"
    
                                              alg=""
                                              />
                                              <CardContent>
                                                  <Typography variant="h6">{course.title}</Typography>
                                                  <Box my={1} width="80%" display="flex" justifyContent='space-between'>
                                                      <Stack direction="row" alignItems='center' spacing={1}>
                                                          <Box component='img' src={clock} />    
                                                          <Typography variant="body2">{course.time}</Typography>    
                                                      </Stack>    
                                                      <Typography variant="body2">{course.level}</Typography>
                                                  </Box>
                                                  <Button sx={{borderRadius: '5px',  width: "100%", textTransform: 'none', backgroundColor: '#FF499E'}}>Start</Button>
                                              </CardContent>
                                              <CardActionArea>

                                              </CardActionArea>
                                          </Card>    
                                      </Grid>    
                                  )
                              })}         
                          </Grid>                        
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <Grid container spacing={{xs: 5, md: 8}} >
                              {myCourses.saved.map((course) => {
                                  return (
                                      <Grid item xs={12} md={4}>
                                          <Card>
                                              <CardMedia component='img'
                                              src={course.img}
                                              height="250"
                                              alg=""
                                              />
                                              <CardContent>
                                                  <Typography variant="h6">{course.title}</Typography>
                                                  <Box my={1} width="80%" display="flex" justifyContent='space-between'>
                                                      <Stack direction="row" alignItems='center' spacing={1}>
                                                          <Box component='img' src={clock} />    
                                                          <Typography variant="body2">{course.time}</Typography>    
                                                      </Stack>    
                                                      <Typography variant="body2">{course.level}</Typography>
                                                  </Box>
                                                  <Button sx={{borderRadius: '5px',  width: "100%", textTransform: 'none', backgroundColor: '#FF499E'}}>Start</Button>
                                              </CardContent>
                                              <CardActionArea>

                                              </CardActionArea>
                                          </Card>    
                                      </Grid>    
                                  )
                              })}
                              
                          </Grid>                        
                    </TabPanel>
                </Box>
            </Box>
        </>
    )
}