import * as React from 'react';
import {useState} from 'react';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {styled} from "@mui/material/styles";
import {drawerWidth} from "./Layout";
import {Box, Breadcrumbs} from "@mui/material";
import {Link} from "react-router-dom";

interface Props {
    handleDrawerOpen(): void

    isSideBarOpen: boolean
    menuTitleSelected: string
}

interface AppBarProps extends MuiAppBarProps {
    open: boolean;
}

const AppBar = styled(
    MuiAppBar,
    // Specifies that all props except for open should be forwarded to the underlying MuiAppBar
    {shouldForwardProp: (prop) => prop !== 'open',})<AppBarProps>(
    ({theme, open}) => ({
        boxShadow :'0 2px 6px -1px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        '& .MuiBreadcrumbs-li .MuiTypography-root': {
            color: '#2e3b4e'
        },
        '& .MuiSvgIcon-root':{
            color: '#2e3b4e'
        },
        // define transition to Sidebar with when drawer is close
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // This conditional spread operator applies the styles inside the object only if the open prop is true.
        ...(open && {
            // calculates the width of the TopBar when the Sidebar is open. It subtracts the width of the drawer (drawerWidth) from the full width (100%) of the container.
            width: `calc(100% - ${drawerWidth}px)`,
            // define transition to Sidebar with when drawer is close
            transition: theme.transitions.create(['width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    })
);

export const TopBar = ({isSideBarOpen, handleDrawerOpen, menuTitleSelected}: Props) => {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);


    const closeAccountMenu = () => {
        setIsAccountMenuOpen(false)
    };

    return (
        <AppBar position="fixed" open={isSideBarOpen}>
            <Toolbar variant="dense" >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={isSideBarOpen ? {display: 'none'} : {mr: 2, alignItems: 'flex-start'}}
                >
                    <MenuIcon/>
                </IconButton>
                <Box sx={{flexGrow: 1}}>
                    <Breadcrumbs separator="›" >
                        <Link to="/backoffice/home" style={{textDecoration:'none'}}>
                            <Typography sx={{fontWeight: 'bold'}} color="white">
                                Home
                            </Typography>
                        </Link>
                        {menuTitleSelected &&
                            <Typography sx={{fontWeight: 'bold'}} color="white">{menuTitleSelected}</Typography>}
                    </Breadcrumbs>
                </Box>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => setIsAccountMenuOpen(true)}
                    color="inherit"
                    sx={{alignItems: 'flex-end'}}
                >
                    <AccountCircle/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    // Defines the position of the start point of the menu in relation to the triggering element (in this case, the account button
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isAccountMenuOpen}
                    onClose={closeAccountMenu}
                >
                    <MenuItem onClick={closeAccountMenu}>Profile</MenuItem>
                    <MenuItem onClick={closeAccountMenu}>My account</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
        ;
}