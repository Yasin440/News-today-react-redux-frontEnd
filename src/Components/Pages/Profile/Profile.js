import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 200;

const Profile = (props) => {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={<HomeIcon />} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/profile/my_order' style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="My Order" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                {admin &&
                    <>
                        <Link to='/profile/add_admin' style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Add Admin" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to='/profile/manage_all_news' style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Manage All News" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to='/profile/addLatestNews' style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Add Latest News" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </>
                }

                <Link to='/profile/profile_makeReview' style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Review" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={logOut}>
                            <i className="fas fa-sign-out-alt me-1" style={{ color: '#F71943', fontSize: '1.2rem' }}></i>
                            <ListItemText primary="LogOut" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        My Profile -({user?.displayName || user?.email})-
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box >
        </Box >
    );
}

Profile.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Profile;