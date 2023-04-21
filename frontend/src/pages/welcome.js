import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ScrollToTopOnMount from "../components/scrolltoview";
import { Link, Navigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';


export default function Welcome() {
    const fullName = sessionStorage.getItem('fullName')

    // if (!sessionStorage.getItem('token')) {
    //     return <Navigate to="/auth" state={{page: 'login'}} />
    // }

    return (
        <React.Fragment>
            <Box color="black" 
            
             sx={{ pb: 8, minHeight: '100vh', background: `url(${frame1}) left bottom no-repeat, url(${frame2}) right bottom no-repeat`}} 
             >
                <ScrollToTopOnMount />        
                <Box display='flex' flexDirection="column" 
                alignItems='center' bgcolor="#1B065E" py={2}>
                    <Link to="/dashboard">
                            <Box component="img" 
                                    width={200}
                                    src = {logo} /> 
                    </Link> 
                </Box>
                <Box display='flex' 
                flexDirection='column' 
                sx={{minHeight: "75vh"}}
                textAlign='center' 
                justifyContent="center"
                alignItems='center'>
                    <Typography sx={{width: {xs: '90%', md: '80%'}, fontSize: {md: '4rem'}}} variant="h4">
                        Hi {fullName}, Welcome to CYBERHIVE
                    </Typography>
                    <Typography mt={2} mb={2}  sx={{width: {xs: '90%', md: '80%'}}}>
                        With our intuitive platform, you'll have access to a wealth of resources, including interactive course and engaging videos. Our team of experienced educators and developers has worked to create an immersive learning experience that's both effective and efficient.
                    </Typography>    
                    <Link to="/dashboard">
                        <Button sx={{borderRadius: '5px', px: 4, textTransform: 'none', backgroundColor: '#FF499E'}}>Go to my dashboard</Button>
                    </Link>

                </Box>
            </Box>
        </React.Fragment>
    )
}