import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import bg1 from "../assets/bg1.png";
import hacker from '../assets/hacker.svg';
import eko from '../assets/eko.svg';
import codepen from '../assets/codepen.svg';
import microsoft from '../assets/microsoft.svg';
import upskill from '../assets/upskill.png';
import gamification from '../assets/gamification.png';
import certification from '../assets/certification.png';
import programmer from "../assets/programmer.png";

import hacker_man1 from "../assets/hacker_man1.png";
import badge3 from "../assets/badge3.png";
import scientist from "../assets/scientist.png";
import clock from "../assets/clock.svg";
import avatar1 from "../assets/Avatar.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";
import Header from '../components/header';

import { HashLink } from "react-router-hash-link";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTopOnMount from "../components/scrolltoview";


export default function Landing() {
    const reveal = () => {
        let reveals = document.querySelectorAll(".reveal");
    
        for (var i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 100;
    
          if (elementTop < windowHeight - elementVisible)
            reveals[i].classList.add('active');
          else
          reveals[i].classList.remove('active');
        }
      }
      React.useEffect(() => { 
        window.addEventListener('scroll', reveal);
      })

    return (
        <React.Fragment>
            <ScrollToTopOnMount />    
            <Header />    
            <Box mt={6} id="box1" 
            sx={{backgroundImage: `url(${bg1})`, 
            pt: {xs: 10, md: 16}, pb: {xs: 10, md: 12}, px: {xs: 3, md: 8}}}>
                <Box sx={{ width: {md: '50%'}}}>
                    <Typography sx={{ fontSize: {md: '4rem'}}} variant="h4">
                        The Best Learning Education Platform to Learn Cyber-Security 
                    </Typography>
                    <Typography mt={2} mb={2}>
                    With our intuitive platform, you'll have access to a wealth of resources, including interactive course and engaging videos. Our team of experienced educators and developers has worked to create an immersive learning experience that's both effective and efficient.
                    </Typography>

                    <Stack direction='row' spacing={2} >
                        <Button sx={{borderRadius: '5px', backgroundColor: '#FF499E'}}>Start learning for free</Button>
                        <Button sx={{borderRadius: '5px', border: 'solid 1px #FF499E'}} >Cyberhive for teams</Button>
                    </Stack>
                </Box>    
            </Box>
            <Box bgcolor='white' display='flex' alignItems='center' sx={{justifyContent: {xs: 'space-between', md: 'space-around'}, p: {xs: 3, md: 6}}} >
                <Box component='img' 
                     src={hacker}
                     height={50}
                     sx={{ width: {xs: '10vw'}}} />
                <Box component='img' 
                    src={eko}
                    height={40}
                    sx={{ width: {xs: '10vw'}}} />
                <Box component='img' 
                    src={codepen}
                    height={30}
                    sx={{ width: {xs: '20vw'}}} />
                <Box component='img' 
                    src={microsoft}
                    height={40}
                    sx={{ width: {xs: '20vw'}}} />
            </Box>
            <Box  component='div' id="blog" className='reveal' 
            bgcolor="#1B065E"
            sx={{
            pt: {xs: 5, md: 10}, pb: {xs: 10, md: 12}, px: {xs: 3, md: 8}}}>
                <Typography textAlign='center' sx={{ fontSize: {md: '4rem'}}} variant="h4">
                    Learn Cyber Security To Safeguard Your Business and Organisation
                </Typography>
                <Typography mt={2} mb={2}>
                Cybersecurity is no longer just a technical issue, but a business issue. It must be integrated into overall business strategy to ensure that all aspects of the organization are protected against cyber threats. Cybersecurity is not just the responsibility of IT departments or security professionals. All employees and users of technology must be vigilant and take responsibility for protecting sensitive data and systems. It is very important that individuals of organization know how to safeguard their systems
                    <br/><br/>
                As technology advances, so do the methods of cyber attacks. Cyber criminals are constantly developing new ways to breach systems, making it increasingly difficult to protect against attacks. Start your learning journey with cyberhive as be help you achieve your goals. Go from beginner to advanced through our structural courses, study guides, resources and expert mentors.
                </Typography>
            </Box>
            <Box component='div' className='reveal' 
            bgcolor="white"
            color="black"
            sx={{
            pt: {xs: 5, md: 10}, pb: {xs: 10, md: 12}, px: {xs: 3, md: 8}}}>
                <Typography textAlign='center' sx={{ fontSize: {md: '4rem'}}} variant="h4">
                    The Process
                </Typography>
                <Typography textAlign='center' mt={2} mb={2}>
                Learning cybersecurity starts with understanding the basics of computer systems. As a beginner, one should start by studying security fundamentals, such as password protection and safe browsing habits. From there, more advanced topics such as encryption, network security, and incident response can be explored. Becoming an expert in cybersecurity requires continuous practice and learning and staying up-to-date with the latest trends and threats in the field. 
                </Typography>
                <Stack direction='row' mt={3}>
                    <Box display="flex"
                     flexDirection="column"
                     bgcolor='#F0F0F0'
                     alignItems="center"
                     borderRadius="15px"
                     px={.5}
                     sx={{ mr: {xs: 1, md: 3}, }}>
                        <Typography display="flex" alignItems='center' 
                        height="70px" textAlign='center' variant="h6"
                        sx={{fontSize: {xs: '1.1rem', md: '1.5rem'}}}>
                            Upskill and practice
                        </Typography>
                        <Box component='img' 
                            src={upskill}                            
                            sx={{ width: {xs: '25vw'},
                            height: {xs: 80, md: '80%'}}} />    
                    </Box>    
                    <Box
                    display="flex"
                    flexDirection="column"
                    bgcolor='#F0F0F0'
                    alignItems="center"
                    borderRadius="15px"
                    px={.5}
                    sx={{ mr: {xs: 1, md: 3}}}>
                        <Typography  display="flex" alignItems='center' 
                        height="70px" variant="h6"
                        sx={{fontSize: {xs: '1.1rem', md: '1.5rem'}}}>
                            Gamification
                        </Typography>
                        <Box component='img' 
                            src={gamification}
                            sx={{ width: {xs: '25vw', md: '28vw'},
                            height: {xs: 80, md: '80%'}}} />
                    </Box>
                    <Box
                    display="flex"
                    flexDirection="column"
                    bgcolor='#F0F0F0'
                    borderRadius="15px"
                    px={.5}
                    alignItems="center"
                    >
                        <Typography display="flex" alignItems='center' 
                        height="70px" variant="h6"
                        sx={{fontSize: {xs: '1.1rem', md: '1.5rem'}}}>
                            Certification
                        </Typography>
                        <Box component='img' 
                            src={certification}
                            sx={{ width: {xs: '25vw', md: '30vw'},
                            height: {xs: 80, md: '80%'}}} />
                    </Box>            
                </Stack>
            </Box>

            <Box component='div' className='reveal' bgcolor='#1B065E' color='#FF499E' display='flex' alignItems='center' sx={{justifyContent: {xs: 'space-between', md: 'space-around'}, p: {xs: 3, md: 6}}} >
                <Box sx={{ width: {xs: '10vw'}}}>
                    <Typography textAlign='center' variant="h4"
                    sx={{fontSize: {xs:'1.4rem', md: '2.5rem'}}}>1000+</Typography>    
                    <Typography color="white"
                    textAlign='center'
                    sx={{fontSize: {xs: '.6rem', md: '1rem'}}}>Vidoes</Typography>
                </Box>    
                <Box sx={{ width: {xs: '10vw'}}}>
                    <Typography textAlign='center' variant="h4"
                    sx={{fontSize: {xs:'1.4rem', md: '2.5rem'}}}>50000+</Typography>    
                    <Typography color="white"
                    textAlign='center'
                    sx={{fontSize: {xs: '.6rem', md: '1rem'}}}>Resources</Typography>
                </Box>    
                <Box sx={{ width: {xs: '10vw'}}} >
                    <Typography textAlign='center' variant="h4"
                    sx={{fontSize: {xs:'1.4rem', md: '2.5rem'}}}>100+</Typography>    
                    <Typography color="white"
                    textAlign='center'
                    sx={{fontSize: {xs: '.6rem', md: '1rem'}}}>Oragnisations</Typography>
                </Box>    
                <Box sx={{ width: {xs: '10vw'}}}>
                    <Typography textAlign='center' variant="h4"
                    sx={{fontSize: {xs:'1.4rem', md: '2.5rem'}}}>3000+</Typography>    
                    <Typography color="white"
                    textAlign='center'
                    sx={{fontSize: {xs: '.6rem', md: '1rem'}}}>Students</Typography>
                </Box>    
                <Box sx={{ width: {xs: '10vw'}}}>
                    <Typography textAlign='center' variant="h4"
                    sx={{fontSize: {xs:'1.4rem', md: '2.5rem'}}}>50+</Typography>    
                    <Typography color="white"
                    textAlign='center'
                    sx={{fontSize: {xs: '.6rem', md: '1rem'}}}>Guides</Typography>
                </Box>    
            </Box>
            
            <Stack component='div' className='reveal' direction='row' sx={{py: {xs: 3, md: 10}, px: {xs: 1, md: 9}}}  spacing={2} alignItems='center'>
                <Box component="img" src={programmer} width="50vw" />
                <Box color='black'>
                    <Typography 
                        sx={{ fontSize: {xs: '1.4rem', md: '4rem'}}} variant="h4">
                        Put Your Skills To The Test With Us
                    </Typography>
                    <Typography mt={2} mb={2}>
                        Are you an  expert in cyber security or are you a beginner and you are trying to get started in cyber security. Start your journey with us by taking structural courses to defend and secure your company of business from malware 
                    </Typography>
                    <Button sx={{borderRadius: '5px', textTransform: 'none', backgroundColor: '#FF499E'}}>Get started for free</Button>
                </Box>
            </Stack>

            <Box component='div' className='reveal' color="black"
            sx={{pt: {xs: 5, md: 0}, pb: {xs: 10, md: 12}, px: {xs: 3, md: 8}}}>
                <Typography textAlign='center' sx={{ fontSize: {md: '4rem'}}} variant="h4">
                    Our Courses
                </Typography>
                <Typography textAlign='center' mt={2} mb={5}>
                    Get started with your journey and take structural courses <br/> to enable you go from beginner to expert
                </Typography>

                <Grid container spacing={{xs: 5, md: 8}} >
                    <Grid item xs={12} md={4}>
                        <Card >
                            <CardMedia component='img'
                            src={hacker_man1}
                            height="250"
                            alg=""
                            />
                            <CardContent>
                                <Typography variant="h6">Ethical Hacking 101</Typography>
                                <Box my={1} width="80%" display="flex" justifyContent='space-between'>
                                    <Stack direction="row" alignItems='center' spacing={1}>
                                        <Box component='img' src={clock} />    
                                        <Typography variant="body2">3hrs</Typography>    
                                    </Stack>    
                                    <Typography variant="body2">Beginner</Typography>
                                </Box>
                                <Button sx={{borderRadius: '5px',  width: "100%", textTransform: 'none', backgroundColor: '#FF499E'}}>Start</Button>
                            </CardContent>
                            <CardActionArea>

                            </CardActionArea>
                        </Card>    
                    </Grid>    
                    <Grid item xs={12} md={4}>
                        <Card >
                            <CardMedia component='img'
                            src={badge3}
                            height="250"
                            alg=""
                            />
                            <CardContent>
                                <Typography variant="h6">Introduction To cyber-security</Typography>
                                <Box my={1} width="80%" display="flex" justifyContent='space-between'>
                                    <Stack direction="row" alignItems='center' spacing={1}>
                                        <Box component='img' src={clock} />    
                                        <Typography variant="body2">8hrs</Typography>    
                                    </Stack>    
                                    <Typography variant="body2">Beginner</Typography>
                                </Box>
                                <Button sx={{borderRadius: '5px',  width: "100%", textTransform: 'none', backgroundColor: '#FF499E'}}>Start</Button>
                            </CardContent>
                            <CardActionArea>

                            </CardActionArea>
                        </Card>    
                    </Grid>    
                    <Grid item xs={12} md={4}>
                        <Card >
                            <CardMedia component='img'
                            src={scientist}
                            height="250"
                            alg=""
                            />
                            <CardContent>
                                <Typography variant="h6">Network analysis</Typography>
                                <Box my={1} width="80%" display="flex" justifyContent='space-between'>
                                    <Stack direction="row" alignItems='center' spacing={1}>
                                        <Box component='img' src={clock} />    
                                        <Typography variant="body2">5hrs</Typography>    
                                    </Stack>    
                                    <Typography variant="body2">Beginner</Typography>
                                </Box>
                                <Button sx={{borderRadius: '5px',  width: "100%", textTransform: 'none', backgroundColor: '#FF499E'}}>Start</Button>
                            </CardContent>
                            <CardActionArea>

                            </CardActionArea>
                        </Card>    
                    </Grid>    
                </Grid>
                
            </Box>

            <Box component='div' className='reveal' display="flex" flexDirection='column' alignItems='center' bgcolor='#1B065E' sx={{pt: 7, pb: {xs: 10, md: 12}, px: {xs: 3, md: 8}}}>
                <Typography textAlign='center' mb={2}>REVIEWS</Typography>
                <Typography mb={5} textAlign='center' sx={{ fontSize: {md: '4rem'}, width: {md: '70%'}}} variant="h4">
                    Why Other People Love
                    To Use Our Platform
                </Typography>

                <Grid container sx={{width: '65vw',}} spacing={{ xs: 2, md: 5 }}>
                    <Grid item md={6} >
                        <Card >
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe">
                                    <img src={avatar1} />
                                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <StarBorderIcon />
                                    </IconButton>
                                    }
                                title="Kemi Adeleke"
                                subheader="Cyber Professional"
                                sx={{ borderBottom: '1px solid #E4E7EA'}}
                            />
                            <CardContent pb={10}>
                                "Fantastic, I'm totally blown away by the response I got from the team at Cyberhive. The lms platform  is exactly what I've been looking for.”
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} >
                        <Card >
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe">
                                    <img src={avatar2} />
                                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <StarBorderIcon />
                                    </IconButton>
                                    }
                                title="Kemi Adeleke"
                                subheader="Cyber Professional"
                                sx={{ borderBottom: '1px solid #E4E7EA'}}
                            />
                            <CardContent pb={10}>
                                Cyberhive has helped me tremendously in advancing my skills in web development. The courses are well-structured, and the instructors are knowledgeable and supportive. I have been able to apply what I've learned to my job and personal projects."
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} className='reveal'>
                        <Card >
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe">
                                    <img src={avatar3} />
                                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <StarBorderIcon />
                                    </IconButton>
                                    }
                                title="Elizabeth Downs"
                                subheader="Security enthusiast"
                                sx={{ borderBottom: '1px solid #E4E7EA'}}
                            />
                            <CardContent pb={10}>
                                “As a retired security personnel, I love learning new things and staying intellectually engaged. Udemy has been a great way for me to continue my personal development and explore my interests. I've taken courses on everything from history and literature to meditation and yoga, and I've been impressed with the quality of instruction and the depth of knowledge presented."
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} component='div' className='reveal' >
                        <Card >
                            <CardHeader
                                avatar={
                                <Avatar aria-label="avatar">
                                    <img src={avatar4} />
                                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <StarBorderIcon />
                                    </IconButton>
                                    }
                                title="Tomori Olajide"
                                subheader="Product Designer"
                                sx={{ borderBottom: '1px solid #E4E7EA'}}
                            />
                            <CardContent pb={10}>
                                "I'm a busy college student, and Cyberhive has been a lifesaver for me. I can learn at my own pace and on my own schedule. The courses are engaging and informative, and I've been able to improve my grades by supplementing my learning with Cyberhive courses”
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Container component='div' className='reveal' bgcolor="white" sx={{display: 'flex', justifyContent: 'center'}}>
                <HashLink to="/#">
                    <IconButton >
                        <Button sx={{borderRadius: '5px', textTransform: 'none', backgroundColor: '#FF499E'}}>Back To Top
                            <KeyboardArrowUpIcon />
                        </Button>    
                    </IconButton>
                </HashLink>
                
            </Container>
        </React.Fragment>
    )
}