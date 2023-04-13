import { Box, Grid, Card, CardMedia, CardContent, Stack, CardActionArea, Button, Typography } from "@mui/material";
import React from "react";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";
import badge5 from "../assets/badge5.png";
import pro1 from '../assets/pro1.png';
import cloud2 from '../assets/cloud2.png';
import pro2 from '../assets/pro2.png';
import clock from "../assets/clock.svg";
import cloud1 from "../assets/cloud1.png";
import cloud3 from "../assets/cloud3.png";
import scientist from "../assets/scientist.png";

import Category from "../components/category";


const courses = {
    professionals: [
        {
            img: pro1,
            title: "Cyber Security, Frameworks, Technologies.",
            time: "35hrs",
            level: "Beginner",
        },{
            img: pro2,
            title: "Ethical Hacking & Financial Security.",
            time: "33hrs",
            level: "Intermediate",
        },{
            img: badge3,
            title: "Cyber security Fundamentals/frameworks.",
            time: "2hrs",
            level: "Intermediate",
        }
    ],
    cloud: [
        {
            img: cloud1,
            title: "Cloud engineering & Network.",
            time: "35hrs",
            level: "Beginner",
        },{
            img: cloud2,
            title: "Advanced devops & Decoding Devops.",
            time: "33hrs",
            level: "Intermediate",
        },{
            img: cloud3,
            title: "Devops Processes.",
            time: "12hrs",
            level: "Intermediate",
        }
    ],
    free: [
        {
            img: pro1,
            title: "Network Defense.",
            time: "35hrs",
            level: "Beginner",
        },{
            img: pro2,
            title: "Endpoint Security 101.",
            time: "33hrs",
            level: "Intermediate",
        },{
            img: badge3,
            title: "Cyber security Fundamentals/frameworks.",
            time: "2hrs",
            level: "Intermediate",
        }
    ],
}


export default class Categories extends React.Component {
    render() {
        return (
            <>
                <Box color="black" p={3}>
                    <Box >
                        <Typography fontWeight="bold" variant="h5" >Categories</Typography>
                        <Typography variant="body2" mb={1}>Check all our categories.</Typography>
                        
                        <Category />
                    </Box>
                    
                    <Box mt={4}  sx={{width: {xs: '80vw', md: 'inherit'}, marginLeft: {xs: '-40vw', md: '0px'}}}>
                        <Typography fontWeight="bold" variant="h5">Courses for Cyber- Security For Professsionals</Typography>
                        <Typography variant="body2" mb={1}>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</Typography>

                        <Grid container spacing={{xs: 5, md: 8}} >
                            {courses.professionals.map((course) => {
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


                    <Box mt={6}  sx={{width: {xs: '80vw', md: 'inherit'}, marginLeft: {xs: '-40vw', md: '0px'}}}>
                        <Typography fontWeight="bold" variant="h5" mb={1}>Courses for Cloud Engineering and Devops</Typography>

                        <Grid container spacing={{xs: 5, md: 8}} >
                            {courses.cloud.map((course) => {
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


                    <Box mt={6}  sx={{width: {xs: '80vw', md: 'inherit'}, marginLeft: {xs: '-40vw', md: '0px'}}}>
                        <Typography fontWeight="bold" variant="h5" mb={1}>Courses for Network Defence & Endpoint Security</Typography>

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
                    
                </Box>

            </>    
        )
    }    
}
