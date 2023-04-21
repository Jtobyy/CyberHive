import { Stack, Box } from "@mui/material";
import React from "react";
import Signup from "../components/signup";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.svg";
// import Otp from "../components/otp";
// import CreatePassword from "../components/createPassword";
// import ProfileName from "../components/setProfileName";
// import TellStatus from "../components/tellStatus";
// import ResetPassword from "../components/resetPassword";
// import ForgotPassword from "../components/forgotPassword";
// import SetNewPassword from "../components/setNewPassword";
import ScrollToTopOnMount from "../components/scrolltoview";
import background from "../assets/bg2.png";
import Login from "../components/login";

export default function Auth() {
    const location = useLocation();
    const props = location.state;

    return(
        <Box id="auth" disableGutters sx={{ backgroundImage: `url(${background})`, pb: 8, minHeight: '100vh'}}>
            <ScrollToTopOnMount />        
            <Box display='flex' flexDirection="column" 
            alignItems='center' bgcolor="#1B065E" py={2}>
                <Link to="/">
                        <Box component="img" 
                                width={200}
                                src = {logo} /> 
                </Link> 
            </Box>
            <Stack direction='column' alignItems='center'>
                
                <Box>
                    {(() => {
                        if (props.page === "signup")
                            return <Signup  />
                        if (props.page === "login")
                            return <Login  />
                        // else if (props.page === "otp")
                        //     return <Otp />
                        // else if (props.page === "createPassword")
                        //     return <CreatePassword />
                        // else if (props.page === "profileName")
                        //     return <ProfileName password={props.password} />
                        // else if (props.page === "resetPassword")
                        //     return <ResetPassword  />
                        // else if (props.page === "forgotPassword")
                        //     return <ForgotPassword  />
                        // else if (props.page === "setNewPassword")
                        //     return <SetNewPassword  />

                        // else if (props.page === "accountCreated")
                        //     return <TellStatus status='accountCreated' />
                        // else if (props.page === "passwordChanged")
                        //     return <TellStatus status='passwordChanged' />                            
                    })()}
                </Box>
            </Stack>
        </Box>
    )
}