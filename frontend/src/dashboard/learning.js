import { Box, BottomNavigation, Tab, Tabs, Typography, BottomNavigationAction } from "@mui/material"
import React from "react";
import PropTypes from 'prop-types';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export default function Learning() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <>
            <Box color="black" p={3}>
                <Typography fontWeight="bold" variant="h5" >All courses</Typography>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#1B065E' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Your courses" {...a11yProps(0)} />
                            <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="Completed course" {...a11yProps(1)} />
                            <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="Saved courses" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>
            </Box>
        </>
    )
}