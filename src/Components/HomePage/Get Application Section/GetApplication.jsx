import React from 'react';
import { Container , Grid , Typography , Divider } from '@mui/material';
import '@fontsource/roboto';

// Import Application Platforms Image
import AppStore from '../../../Assets/Get Application/AppStore.png';
import GooglePlay from '../../../Assets/Get Application/GooglePlay.png';
import Amazon from '../../../Assets/Get Application/Amazon.png';

// Import SinglePlatform Component
import PlatformItems from './Platform Items/PlatformItems';

// Import JSX Styles
import useStyles from './GetApplicationStyles';

const GetApplication = () => {

    const ApplicationData = [
        {'id': 1 , 'img': GooglePlay ,'width': '150px' , 'height': '47px'},
        {'id': 2 , 'img': Amazon , 'width': '150px' , 'height': '55px'},
        {'id': 3 , 'img': AppStore , 'width': '150px' , 'height': '47px'},
    ]

    const classes = useStyles();

    return(
        <Container className={classes.root}>
            <Typography variant="h3" className={classes.GetApplicationMain}>Get Delivero App</Typography>
            <Typography variant="body1" className={classes.GetApplicationSecondary}>You can download Delivero application on 3 platforms</Typography>
            <br />
            <Grid container justifyContent="center" className={classes.GetApplicationItems}>
                <PlatformItems ApplicationData={ApplicationData} />
            </Grid>
        </Container>
    );
}

export default GetApplication;