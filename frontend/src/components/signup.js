import React from "react";
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, Input, FormHelperText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <React.Fragment>
            <Box display='flex' my={10} py={5} flexDirection="column" alignItems='center' bgcolor="#1B065E" sx={{width: {md: '70vw'}}}>
                <Typography textAlign='center' sx={{ fontSize: {md: '2.5rem'}}} variant="h5">
                    Create Your Cyberhive Account
                </Typography>
                <Typography textAlign="center" mb={2}>
                    You get free access to courses when you create your account. 
                </Typography>
                <form className="d-flex flex-column w-75 px-md-5">
                    <div className="form-group">
                        <label htmlFor="full_name">Full name</label>
                        <input id="full_name" className="form-control" aria-describedby="my-helper-text" />
                        {/* <FormHelperText id="">We'll never share your email.</FormHelperText> */}
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" className="form-control" aria-describedby="my-helper-text" />
                        {/* <FormHelperText id="">We'll never share your email.</FormHelperText> */}
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="form-control" aria-describedby="my-helper-text" />
                        {/* <FormHelperText id="">We'll never share your email.</FormHelperText> */}
                    </div>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Terms and conditions" />
                    <Button sx={{borderRadius: '5px', mt: 1, alignSelf: 'center', width: '50%', backgroundColor: '#FF499E'}}>Create account </Button>
                    <Typography sx={{alignSelf: 'center',  mt: 1,}}>Already have an account? 
                        <Link to="/auth" class="ms-1" style={{color: "#FF499E"}} state={{page: 'login'}}>
                            Log in
                        </Link>
                    </Typography>
                </form>
                
            </Box>
        </React.Fragment>
    )
}