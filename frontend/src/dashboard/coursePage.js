import { Typography, Tab, Tabs, Box, Stack, Avatar } from "@mui/material"
import PropTypes from 'prop-types';
import React from "react";
import instructor from "../assets/instructor.svg";
import video from "../assets/video.png";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`course-tabpanel-${index}`}
        aria-labelledby={`course-tab-${index}`}
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
      id: `course-tab-${index}`,
      'aria-controls': `course-tabpanel-${index}`,
    };
  }


export default function Course() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
          <Box color="black" p={3}>
            <Typography fontWeight="bold" variant="h5" >Cyber Security, Frameworks, Technologies</Typography>

            <Box component="img" src={video} sx={{width: {xs: "80vw", md: "90vw"}}}  />    

            <Box mt={5} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#1B065E' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="Notes" {...a11yProps(1)} />
                    <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="Reviews" {...a11yProps(2)} />
                    <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="Learning tools" {...a11yProps(3)} />
                    <Tab sx={{marginLeft: {xs: '0px', md: '60px'}}} label="FAQs" {...a11yProps(4)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                
                <Box>
                    <Typography variant="h5" py={1}>Course Overview</Typography>
                    <Typography>
                        With the rise in cyber threats, including ransomware, identity theft, and data loss, understanding proper security within Amazon Web Services and hybrid cloud network infrastructures is increasingly important. In this course, we will provide an overview of the security, compliance and identity solutions for systems
            This course will provide an understanding of the methodologies that are important in protecting identities and data within the cloud network and compute infrastructure and how they are used for strong security posture management.
            This course will prepare you for the AWS Certified Security Specialty (SCS-C01) exam with lectures, demos, and assessment questions to gain understanding of all objective areas needed for you to pass exam.
                    </Typography>    
                </Box>    
                
                <Box my={3}>
                    <Typography variant="h5" py={1}>What you will learn</Typography>
                    
                    <Typography>By the end of this course:</Typography>
                    <ul>
                        <li>Students will learn the basics of cybersecurity, including the different types of cyber threats and attacks, the tools and techniques used by attackers, and the principles of cybersecurity.</li>
                        <li>Students will learn how to gather and analyze information about cyber threats to better protect their organization. This includes understanding threat actors, tactics, and motivations, as well as learning about threat intelligence sources and analysis techniques</li>
                        <li>Students will learn how to respond to a cyber attack or security incident, including how to identify and contain the incident, analyze the impact, and implement remediation measure</li>
                        <li>Students will learn how to secure computer networks from cyber attacks. This includes understanding network architecture, identifying potential vulnerabilities, implementing security measures, and monitoring network activity.</li>
                    </ul>    
                </Box>    
                
                <Box mt={5}>
                    <Typography variant="h5" py={1}>Instructor</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" my={2}>
                        <Avatar aria-label="avatar">
                            <img src={instructor} />
                        </Avatar>
                        <Box>
                            <Typography variant="h5" py={1}>Engr. Felix Williaams</Typography>    
                            <Typography variant="subtitle2">Cyber Engineer and Lead instructor</Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <Typography>
                            I'm Felix, I'm a Cyber security analyst and a nna engineer with a passion for teaching. I'm the lead instructor at the Cyberhive, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.
                            I always tell my students to continue striving to improve themselves and their work. I seek out feedback and are open to constructive criticism as a means of self-improvement always striving to improve themselves and their work. 
                            I understands that the field of cyber security is constantly evolving, and is able to adapt to changes and new challenges as they arise. I maintain a flexible mindset and are open to new ideas and approaches.
                            Let’s go on this journey together.
                            <br/><br/>
                            I'll be there for you every step of the way.
                        </Typography>
                    </Box>    
                </Box>                
                
                

            </TabPanel>                
            <TabPanel value={value} index={1}>
                    
            </TabPanel>                
            <TabPanel value={value} index={2}>
            
            </TabPanel>                            
            <TabPanel value={value} index={3}>
            
            </TabPanel>                            
            <TabPanel value={value} index={4}>
            
            </TabPanel>                            
         </Box>            
         </React.Fragment>
    )
}