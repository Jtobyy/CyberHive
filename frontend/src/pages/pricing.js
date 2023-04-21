import React from "react";
import ScrollToTopOnMount from "../components/scrolltoview";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";


const plans = [
    {
        id: 1,    
        title: 'Cyberhive Free',
        price: '$0/',
        benefits: [
            '5+ free courses',
            '1 certificate',
            '1 specific guide',
            '5+ free courses',
            '5 assessments'
        ],
        cta: 'Start for free',
        color: 'black',
        bgcolor: 'white',
        border: 'solid 3px #1B065E',
    },
    {
        id: 2,    
        title: 'Cyberhive Pro',
        price: '$20/',
        benefits: [
            '200+ courses on cybersecurity',
            'Certificates on completion',
            '8+specific guide',
            'Access to new courses',
            'Gamification experience',
            '200+ hourses of videos',
        ],
        cta: 'Subscribe',
        color: 'black',
        bgcolor: 'white',
        border: 'solid 3px #1B065E',
    },
    {
        id: 3,    
        title: 'Cyberhive Teams',
        price: '$40/',
        benefits: [
            'Up to 30 employees',
            'Physical Mentor placement',
            '200+ courses on cybersecurity',
            'Certificates on completion',
            '8+specific guide',
            'Access to new courses',
            'Gamification experience',
            '200+ hourses of videos',
        ],
        cta: 'Subscribe',
        color: 'white',
        bgcolor: '#1B065E',
        border: 'solid 3px #FF499E',
        tag: 'Best for organisations',
    }
]

export default function Pricing() {
    return (
        <React.Fragment>
            <Box color="black" disableGutters sx={{ pb: 8, minHeight: '100vh'}}>
                <ScrollToTopOnMount />        
                <Box display='flex' flexDirection="column" 
                alignItems='center' bgcolor="#1B065E" py={2}>
                    <Link to="/">
                            <Box component="img" 
                                    width={200}
                                    src = {logo} /> 
                    </Link> 
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' pt={{xs: 5, md: 8}} >
                    <Typography textAlign='center' sx={{ width: {xs: '100%', md: '50%'}, fontSize: {md: '2.5rem'}}} variant="h5">
                        The Most Comprehensive Cost-Effective Way to Learn Cybersecurity
                    </Typography>
                    <Grid container mt={5} spacing={3} justifyContent='space-evenly'>
                        {plans.map((plan) => {
                            return (
                            <Grid item display='flex' flexDirection='column' alignItems='center'>
                                {(() => {if (plan.tag) return <Box p={1} bgcolor="#1B065E" color="white" sx={{width: 'fit-content', position: 'relative', top: '15px'}}>{plan.tag}</Box>})()}
                                <Box borderRadius={5} color={plan.color} bgcolor={plan.bgcolor} display='flex' flexDirection='column' alignItems="center" py={3} px={3} sx={{border: plan.border}}>
                                    <Typography textAlign='center' variant="h4" fontWeight='bold'
                                    sx={{fontSize: {xs:'1.4rem', md: '2rem'}}}>{plan.title}</Typography>    
                                    <Box mt={3} display='flex' alignItems='center'justifyContent='center'>
                                        <Typography textAlign='center' fontWeight='bold' variant="h3"
                                        sx={{fontSize: {xs:'2rem', md: '2.5rem'}}}>{plan.price}</Typography>    
                                        <Typography textAlign='center' fontWeight='bold' className="ms-1">month</Typography>    
                                    </Box>
                                    
                                    <ul className="mt-3">
                                        {plan.benefits.map((benefit) => (
                                            <li>{benefit} </li>
                                        ))}    
                                    </ul>

                                    <Button sx={{borderRadius: '5px', textTransform: 'none', backgroundColor: '#FF499E'}}>{plan.cta}</Button>                                
                                </Box>
                            </Grid>
                            )
                            
                        })}  
                        
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    )
    
}