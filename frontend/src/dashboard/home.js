import { Box, Grid, Card, CardMedia, CardContent, Stack, CardActionArea, Button, Typography } from "@mui/material";
import React from "react";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";
import badge5 from "../assets/badge5.png";
import recom1 from '../assets/recom1.png';
import devops from '../assets/devops.png';
import recom2 from '../assets/recom2.png';
import clock from "../assets/clock.svg";
import hacker from "../assets/hacker_man1.png";
import scientist from "../assets/scientist.png";

import Category from "../components/category";


const courses = {
    recommended: [
            {
                img: recom1,
                title: "Introduction to Cyber Security.",
                time: "3hrs",
                level: "Beginner",
            },{
                img: recom2,
                title: "Artificial intelligence and Security.",
                time: "3hrs",
                level: "Intermediate",
            },{
                img: badge3,
                title: "Cyber security Fundamentals/frameworks.",
                time: "3hrs",
                level: "Intermediate",
            }
        ],
    structural: [
        {
            img: hacker,
            title: "Ethical Hacking.",
            time: "3hrs",
            level: "Beginner",
        },{
            img: badge3,
            title: "Cyber security Fundamentals/frameworks.",
            time: "2hrs",
            level: "Intermediate",
        },{
            img: devops,
            title: "Devops Processes.",
            time: "12hrs",
            level: "Intermediate",
        }
    ],
    free: [
        {
            img: badge4,
            title: "Network Defense.",
            time: "1hrs",
            level: "Beginner",
        },{
            img: badge5,
            title: "Endpoint Security 101.",
            time: "1hrs",
            level: "Intermediate",
        },{
            img: scientist,
            title: "Network Analysis.",
            time: "2hrs",
            level: "Intermediate",
        }
    ],
}


export default class Home extends React.Component {
    render() {
        return (
            <>
                <Box color="black" p={3}>
                    <Typography fontWeight="bold" >Welcome to your dashboard, Tomori</Typography>
                    <Typography variant="body2">We're delighted to have you onboard! You took the right first step to cybersecurity education. Start learning right away.</Typography>   

                    <Box mt={4}>
                        <Typography fontWeight="bold" variant="h5">Recommended  courses</Typography>
                        <Typography variant="body2" mb={4}>Smart, simple and courses to get your cyber journey underway</Typography>

                        <Grid container spacing={{xs: 5, md: 8}} sx={{width: {xs: '80vw', md: 'inherit'}, marginLeft: {xs: '-40vw', md: '-60px'}}}>
                            {courses.recommended.map((course) => {
                                return (
                                    <Grid item xs={12} md={4} >
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
                                                
                                                <Button classes="custom-button" sx={{borderRadius: '5px',  width: "100%", 
                                                textTransform: 'none', backgroundColor: "#FF499E"}}>Start</Button>
                                                {/* <StyledButton>
                                                    
                                                </StyledButton> */}
                                                
                                            </CardContent>
                                            <CardActionArea>

                                            </CardActionArea>
                                        </Card>    
                                    </Grid>    
                                )
                            })}
                            
                        </Grid>                        
                    </Box>

                    <Box mt={6}  sx={{width: {xs: '80vw', md: 'inherit'}, marginLeft: {xs: '-40vw', md: '-60px'}}}>
                        <Typography fontWeight="bold" variant="h5">Structural courses</Typography>
                        <Typography variant="body2" mb={4}>Smart, simple and courses to get your cyber journey underway</Typography>

                        <Grid container spacing={{xs: 5, md: 8}} >
                            {courses.structural.map((course) => {
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
                    </Box>                    


                    <Box mt={6}  sx={{width: {xs: '80vw', md: 'inherit'}, marginLeft: {xs: '-40vw', md: '-60px'}}}>
                        <Typography fontWeight="bold" variant="h5">Free courses</Typography>
                        <Typography variant="body2" mb={4}>Learn a thing or two without suscribing to the platform</Typography>

                        <Grid container spacing={{xs: 5, md: 8}} >
                            {courses.free.map((course) => {
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
                    </Box>  
                    <Box mt={5}  sx={{width: {xs: '80vw', md: 'inherit'}, marginLeft: {xs: '-40vw', md: '-60px'}}}>
                        <Typography fontWeight="bold" variant="h5" mb={1}>Categories</Typography>
                        <Category />
                    </Box>
                    
                </Box>

            </>    
        )
    }    
}
