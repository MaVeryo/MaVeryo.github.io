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
import { useNavigate } from 'react-router-dom';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
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
  '&:hover': { color: 'rgba(255,255,255,0.8)' },
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
  const navigate = useNavigate();
  const [showNav, setShowNav] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/about');
        break;
      case 2:
        navigate('/projects');
        break;
      case 3:
        navigate('/resume');
        break;
      case 4:
        navigate('/photography');
        break;
      case 5:
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Box sx={{  width: '100%', zIndex:'2147483647', position: 'fixed', top: showNav ? '0' : '-100px', transition: 'top 0.3s'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div className="block md:hidden z-40">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: 'flex', marginLeft: '1%', marginTop: '1%' }}
          >
            <img src={MVlogo} alt="Logo" style={{ width: '60px', height: '60px' }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose} component="a" href="#home">
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#about">
              About
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#projects">
              Projects
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#resume">
              Resume
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#photography">
              Photography
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#contact">
              Contact
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://github.com/MaVeryo"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon /> GitHub
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon /> LinkedIn
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.instagram.com/vermama___/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon /> Instagram
            </MenuItem>
          </Menu>
        </div>
        <div className="hidden md:block z-40">
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
            sx={{ '& .MuiTab-root': { color: 'white', fontSize: '1rem' } }}
          >
            <Tab
              icon={<img src={MVlogo} alt="Logo" style={{ width: '60px', height: '60px' }} />}
              aria-label="github"
              href="/"
              rel="noopener"
            />
            <StyledTab label="About" />
            <StyledTab label="Projects" />
            <StyledTab label="Resume" />
            <StyledTab label="Photography" />
            <StyledTab label="Contact" />
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', marginLeft: '5%' }}>
              <Tab
                icon={<GitHubIcon />}
                aria-label="github"
                href="https://github.com/MaVeryo"
                target="_blank"
                rel="noopener"
                sx={{ '&:hover': { color: '#72A8FD' } }}
              />
              <Tab
                icon={<LinkedInIcon />}
                aria-label="linkedin"
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener"
                sx={{ '&:hover': { color: '#72A8FD' } }}
              />
              <Tab
                icon={<InstagramIcon />}
                aria-label="insta"
                href="https://www.instagram.com/vermama___/"
                target="_blank"
                rel="noopener"
                sx={{ '&:hover': { color: '#72A8FD' } }}
              />
            </Box>
          </StyledTabs>
        </div>
      </Box>
    </Box>
  );
}