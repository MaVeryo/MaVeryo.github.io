import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MVlogo from '../assets/Website Revamp Photos/Logo/MVLogo.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';


interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {isSmallScreen ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx = {{display: 'flex', marginLeft: '1%', marginTop: '1%'}}
            >
              <img src={MVlogo} alt="Logo" style={{width: '60px', height: '60px' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component="a" href="#home">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#about">About</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#projects">Projects</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#resume">Resume</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#photography">Photography</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#contact">Contact</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="https://github.com/MaVeryo" target="_blank" rel="noopener">
                <GitHubIcon /> GitHub
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener">
                <LinkedInIcon /> LinkedIn
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="https://www.instagram.com/vermama___/" target="_blank" rel="noopener">
                <InstagramIcon /> Instagram
              </MenuItem>
            </Menu>
          </>
        ) : (
          <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ '& .MuiTab-root': { color: 'white', fontSize: '1rem' } }}>
            <Tab icon={<img src={MVlogo} alt="Logo" style={{ width: '60px', height: '60px' }} />} aria-label="github" href="https://maveryo.github.io" target="_blank" rel="noopener" />
            <StyledTab label="About" {...a11yProps(0)} />
            <StyledTab label="Projects" {...a11yProps(1)} />
            <StyledTab label="Resume" {...a11yProps(2)} />
            <StyledTab label="Photography" {...a11yProps(3)} />
            <StyledTab label="Contact" {...a11yProps(4)} />
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', marginLeft: '5%' }}>
              <Tab icon={<GitHubIcon />} aria-label="github" href="https://github.com/MaVeryo" target="_blank" rel="noopener" />
              <Tab icon={<LinkedInIcon />} aria-label="linkedin" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" />
              <Tab icon={<InstagramIcon />} aria-label="insta" href="https://www.instagram.com/vermama___/" target="_blank" rel="noopener" />
            </Box>
          </StyledTabs>
        )}
      </Box>
    </Box>
  );
}