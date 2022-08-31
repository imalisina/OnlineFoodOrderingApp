import React from 'react';
import { Typography , Container , Button , Divider } from '@mui/material';
import '@fontsource/roboto';

// Import SPA NavLink
import { NavLink } from 'react-router-dom'; 

// Import Delivero Logo As Hero Media
import Logo from '../../../Assets/Images/Logo.png';

// Import Icon For Button
import StoreIcon from '@mui/icons-material/Store';

// Import JSX Styles
import useStyles from "./HeroStyles";

const Hero = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.HeroContent}>
                    <Typography className={classes.HeroTxt} variant="h1">Order Now !</Typography>
                    <Typography className={classes.HeroDescription} variant="body2" color="textSecondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Animi eligendi consectetur reprehenderit libero
                        quaerat totam consequatur, maxime similique doloribus dignissimos eum,
                        blanditiis temporibus! Iure, dolorum debitis. Labore, sit dolorum.
                        quaerat totam consequatur, maxime similique doloribus dignissimos eum,
                        blanditiis temporibus! Iure, dolorum debitis. Labore, sit dolorum.
                    </Typography>
                    <Container>
                        <NavLink to="/order">
                            <Button className={classes.HeroButton} variant="contained" color="inherit" startIcon={<StoreIcon />}>
                                Order Now
                            </Button>
                        </NavLink>
                    </Container>
                </div>
                <Container className={classes.HeroMedia}>
                    <img src={Logo} width="300px" height="300px" />
                </Container>
            </div>
            <div className={classes.DividerContainer}>
                <Divider className={classes.Divider} />
            </div>
        </>
    )
}

export default Hero;