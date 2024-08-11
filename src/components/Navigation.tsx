import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MVlogo from '../assets/Website Revamp Photos/Logo/MVLogo.png';




interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}


/*
This function takes a single parameter, index, 
which is a number representing the position of a tab in a tab list. 
It returns an object containing two properties: id and aria-controls.
*/
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    top: '4rem',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '100%',
    backgroundColor: '#516E90',
  },
});

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(25),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: 'white',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));





export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{'& .MuiTab-root': {color: 'white', fontSize:'1rem'},}}>
          <Tab icon={<img src={MVlogo} alt="Logo" style={{ width: '60px', height: '60px' }} />} aria-label="github"  href="https://maveryo.github.io" target="_blank" rel="noopener"/>
          <StyledTab label="About" {...a11yProps(0)} />
          <StyledTab label="Projects" {...a11yProps(1)} />
          <StyledTab label="Resume" {...a11yProps(2)} />
          <StyledTab label="Photography" {...a11yProps(3)} />
          <StyledTab label="Contact" {...a11yProps(4)} />
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', marginLeft: '5%'}}> 
            <Tab icon={<GitHubIcon />} aria-label="github"  href="https://github.com/MaVeryo" target="_blank" rel="noopener"/>
            <Tab icon={<LinkedInIcon />} aria-label="linkedin" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" />
            <Tab icon={<InstagramIcon />} aria-label="insta" href="https://www.instagram.com/vermama___/" target="_blank" rel="noopener" />
          </Box>
        </StyledTabs>
      </Box>
    </Box>
  );
}