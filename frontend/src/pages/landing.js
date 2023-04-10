import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import React from "react";
import bg1 from "../assets/bg1.png";

export default function Landing() {
    return (
        <React.Fragment>
            <Box mt={6}
            sx={{backgroundImage: `url(${bg1})`, py: {xs: 10, md: 20}, px: {xs: 3, md: 8}}}>
                <Box sx={{ width: {md: '50%'}}}>
                <Typography sx={{ fontSize: {md: '4rem'}}} variant="h4">
                    The Best Learning Education Platform to Learn Cyber-Security 
                </Typography>
                <Typography mt={2} mb={2}>
                With our intuitive platform, you'll have access to a wealth of resources, including interactive course and engaging videos. Our team of experienced educators and developers has worked to create an immersive learning experience that's both effective and efficient.
                </Typography>

                <Stack direction='row' spacing={2}>
                    <Button sx={{borderRadius: '5px', backgroundColor: '#FF499E'}}>Start learning for free</Button>
                    <Button sx={{borderRadius: '5px', border: 'solid 1px #FF499E'}} >Cyberhive for teams</Button>
                </Stack>
                </Box>    
            </Box>
        </React.Fragment>
    )
}