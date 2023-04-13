import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, ListItemText, Stack, List, ListItemButton, ListItemIcon } from "@mui/material";
import ScrollToTopOnMount from "../components/scrolltoview";
import logo from "../assets/logo.svg";
import avatar from "../assets/ic_avatar.svg";

import category from "../assets/category.svg";
import folder from "../assets/folder_ic.svg";
import home from "../assets/home_ic.svg";
import resources from "../assets/resources_ic.svg";
import guides from "../assets/guides_ic.svg";
import Home from "../dashboard/home";
import Categories from "../dashboard/categories";
import Learning from "../dashboard/learning";


const navItems = [
    {
        id: "dashboard",
        img: home,
        text: "Dashboard",
    }, {
        id: "categories",
        img: category,
        text: "Categories",
    }, {
        id: "learning",
        img: folder,
        text: "My Learning",
    },{
        id: "resources",
        img: resources,
        text: "Resources",
    }, {
        id: "guides",
        img: guides,
        text: "Guides",
    }
]

export default function Dashboard() {
        const [active, setActive] = useState("dashboard")
        
        return (
            <React.Fragment>
                <ScrollToTopOnMount />        
                <Box display='flex' px={{xs: 2, md: 7}} flexDirection="row" 
                alignItems='center' justifyContent='space-between' bgcolor="#1B065E" py={2}>
                    <Link to="/">
                            <Box component="img" 
                                    width={200}
                                    src = {logo} /> 
                    </Link>
                
                    <Box component="img" 
                            width={50}
                            src = {avatar} /> 
                    
                </Box>    
                <Stack direction="row" sx={{minHeight: '100vh'}}>
                    <Box pt={3} pb={5} bgcolor="#1B065E" sx={{height: 'fit-content'}}>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: '#1B065E' }}
                            component="nav"
                            aria-labelledby="dashboard-nav"
                            >
                                {navItems.map((item) => {
                                    if (active == item.id)    
                                        return (
                                            <ListItemButton key={item.id} id={item.id}
                                            sx={{bgcolor: '#FF499E'}}>
                                                <ListItemIcon>
                                                    <Box component="img" src={item.img} />
                                                </ListItemIcon>
                                                <ListItemText primary={item.text} />
                                            </ListItemButton>
                                        )
                                    else
                                        return (
                                            <ListItemButton key={item.id} id={item.id}
                                            onClick={() => setActive(item.id)}>
                                                <ListItemIcon>
                                                    <Box component="img" src={item.img} />
                                                </ListItemIcon>
                                                <ListItemText primary={item.text} />
                                            </ListItemButton>
                                        )
                                })}
                        </List>
                    </Box>
                    <Box>
                        {(() => {
                            if (active === "dashboard") 
                                return <Home />
                            else if (active === "categories") 
                                return <Categories />
                            else if (active === "learning") 
                                return <Learning />
                        })()}
                    </Box>
                </Stack>
            </React.Fragment>
        )
}