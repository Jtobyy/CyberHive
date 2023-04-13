import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


const StyledCategory = styled(Box)`
  ${({ theme }) => `
  cursor: pointer;
//   background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    // background-color: ${theme.palette.secondary.main};
    transform: scale(1.1);
  }
  `}
`;

const categories = [
    'Malware', 'Devops', 'IT Basics', 'Cloud ',
    'Penetration', 'Linux', 'Hacking', 'Deep CSC'
]

export default function Category() {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                {categories.map((category) => {
                    return (
                        <Grid item>
                            <StyledCategory>
                                <Box px={4} py={1} sx={{border: 'solid 1px black', cursor: 'pointer'}}>
                                    {category}    
                                </Box>    
                            </StyledCategory>
                        </Grid>              
                    )
                })
                    
                }    
                
            </Grid>
        </React.Fragment>
    )
}