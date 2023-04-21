import { Box, Typography } from "@mui/material"
import Header from "../components/header"

export default function NotFound() {
    return (
        <Box color="black">
            <Header />    
            <Box display='flex' height='100vh' flexDirection='column' justifyContent='center' alignItems='center'>

                <Typography variant="h4">404 page not found</Typography>
                <Typography variant="body1">OOPS, the page you are looking for doesn't exist.</Typography>
            </Box>
        </Box>
    )
}