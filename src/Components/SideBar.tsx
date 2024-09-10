import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  ListItemButton,
  IconButton,
  Toolbar,
  AppBar,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Pix } from '@mui/icons-material';

const drawerWidth = 210;

const SideBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // For small screens (mobile)
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // For tablet screens

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ overflow: 'auto', height: '100%', backgroundColor: '#0c1017', fontFamily: 'sans-serif'}}>
      <List>
        {/* Logo Section */}
        <ListItemButton>
          <Typography variant="h6" sx={{ fontWeight: 1000, color: '#FFFFFF', fontSize: 15,justifyContent:'center'}}>
            Sitemark-web
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 10,fontWeight: 1000, marginLeft: '10px', color: 'gray' }}>
            Web app
          </Typography>
        </ListItemButton>

        <Divider sx={{ backgroundColor: '#212732', }} />

        {/* Menu Items */}
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#FFFFFF', fontSize: 20,marginLeft:4, }} />
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ color: '#FFFFFF', fontSize: 8,fontWeight:600}} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AnalyticsIcon sx={{ color: '#FFFFFF', fontSize: 20 ,marginLeft:4}} />
          </ListItemIcon>
          <ListItemText primary="Analytics" sx={{ color: '#FFFFFF', fontSize: 10 }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <GroupIcon sx={{ color: '#FFFFFF', fontSize: 20 ,marginLeft:4}} />
          </ListItemIcon>
          <ListItemText primary="Clients" sx={{ color: '#FFFFFF', fontSize: 10 }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <TaskIcon sx={{ color: 'white', fontSize: 20 ,marginLeft:4}} />
          </ListItemIcon>
          <ListItemText primary="Tasks" sx={{ color: 'white', fontSize: 10 }} />
        </ListItemButton>

        <Divider sx={{ my: 5 }} />

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon sx={{ color: 'white', fontSize: 20 ,marginLeft:4}} />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={{ color: 'white', fontSize: 10 }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <InfoIcon sx={{ color: 'white', fontSize: 20 ,marginLeft:4}} />
          </ListItemIcon>
          <ListItemText primary="About" sx={{ color: 'white', fontSize: 10 }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <FeedbackIcon sx={{ color: 'white', fontSize: 20 ,marginLeft:4}} />
          </ListItemIcon>
          <ListItemText primary="Feedback" sx={{ color: 'white', fontSize: 10 }} />
        </ListItemButton>

        <Divider sx={{ my: 2 }} />

        {/* Plan section */}
        <Box sx={{ padding: '18px', color: 'white',  border: `1px solid #212732`,borderRadius:4 }}>
          <Typography variant="body2" color="gray" fontSize={10}>
            Plan about to expire
          </Typography>
          <Typography variant="caption" color="gray" fontSize={10}>
            Enjoy 10% off when renewing your plan today.
          </Typography>
          <Box
            sx={{
              marginTop: '8px',
              padding: '8px 12px',
              backgroundColor: '#fff',
              color: '#1E1E2F',
              textAlign: 'center',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Get the discount
          </Box>
        </Box>
      </List>

      <Box sx={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
        {/* Avatar Section */}
        <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
        <Box sx={{ marginLeft: '12px' }}>
          <Typography variant="body1" color="white" fontSize={10}>Riley Carter</Typography>
          <Typography variant="caption" color="gray" fontSize={10}>
            riley@email.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* AppBar for Menu Button on Mobile */}
      {(isMobile || isTablet) && (
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: '#1E1E2F' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Sitemark-web
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar menu"
      >
        {/* Drawer for mobile devices (temporary) */}
        <Drawer
          variant={isMobile || isTablet ? 'temporary' : 'permanent'}
          open={mobileOpen || !isMobile}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#0c1017',
              color: 'white',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Offset to make space for AppBar */}
      {(isMobile || isTablet) && <Toolbar />}
    </>
  );
};

export default SideBar;
