import React from 'react';
import { Typography , Container , Button } from '@mui/material';
import '@fontsource/roboto/300.css';

// Import SPA NavLink
import { NavLink } from 'react-router-dom';

// Import Icons For Menu Items
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

// Import JSX Styles
import useStyles from "./NavbarStyles";

const Navbar = () => {

    const MenuItems = [
        {'id': 1 , 'name': 'Home' , 'icon': <HouseRoundedIcon /> , 'url': '/'},
        {'id': 2 , 'name': 'Order' , 'icon': <FastfoodRoundedIcon /> , 'url': '/order'},
        {'id': 3 , 'name': 'About Delivero' , 'icon': <HelpRoundedIcon /> , 'url': '/about'},
        {'id': 4 , 'name': 'Support' , 'icon': <SupportAgentRoundedIcon /> , 'url': '/support'},
    ]

    const classes = useStyles();
    
    return (
        <>
            <Container className={classes.Root}>
                <div className={classes.Container}>
                    <div className={classes.Logo}>
                        <Typography variant="h3" component="h1"><NavLink to="/" className={classes.RouteLink}>Delivero</NavLink></Typography>
                    </div>
                    <div className={classes.Menu}>
                        <nav className={classes.Nav}>
                            <ul>
                                { MenuItems.map((MenuItem) => {
                                    return(
                                        <li key={MenuItem.id} className={classes.MenuItem}>
                                            <NavLink className={classes.RouteLink} to={MenuItem.url}>
                                                <Button className={classes.MenuItemLink} color="inherit" startIcon={MenuItem.icon}>
                                                    {MenuItem.name}
                                                </Button>
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Navbar;