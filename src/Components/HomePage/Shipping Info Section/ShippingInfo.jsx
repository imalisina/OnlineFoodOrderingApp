import React from 'react';
import { Typography , Container , Grid , Divider } from "@mui/material";
import '@fontsource/roboto';


// Import JSX Styles
import useSStyles from './ShippingInfoStyles';

// Import Component
import ShippingCard from './ShippingCard/ShippingCard';

const ShippingInfo = ({ShipOptions}) => {

    const classes = useSStyles();

    return(
        <Container className={classes.root}>
            <Typography variant="h3" className={classes.ShippingSectionHeader}>Shipping Options</Typography>
            <Divider className={classes.Divider} color="inherit" />
            <br />
            <Grid container justifyContent="center" className={classes.ShippingItems}>
                {ShipOptions.map((item) => {
                    return(
                        <ShippingCard key={item.id} item={item} />
                    );
                })}
            </Grid>
        </Container>
    );
}

export default ShippingInfo;