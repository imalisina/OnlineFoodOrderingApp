import React from 'react';
import { Container , Typography , Button , Chip , Alert } from '@mui/material';
import '@fontsource/roboto';

// Import JSX Styles
import useStyles from './ShippingDetailStyles';

// Import Icon
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';

const ShippingDetail = ({item}) => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.root}>
                <Chip className={classes.Header} label={item.title} />
                <Alert className={classes.Verified} icon={<VerifiedIcon className={classes.VerifyIcon} fontSize="inherit" />} severity="error">Verified By Delivero</Alert>
                <Alert className={classes.SaveTime} icon={<SpeedIcon className={classes.SpeedIcon} fontSize="inherit" />} severity="info">{item.description}</Alert>
                <Typography className={classes.Companies} variant="body1" color="GrayText">Shipping Companies : {item.company}</Typography>
                <Chip className={classes.Price} label={"Price : " + item.price} />
            </Container>
        </>
    )
}

export default ShippingDetail;
