import React from 'react';

// Import Home Page Components
import Hero from '../Hero Section/Hero';
import ShippingInfo from '../Shipping Info Section/ShippingInfo';
import BestOfMonthPack from '../Best Food Pack/BestOfMonthPack';
import GetApplication from '../Get Application Section/GetApplication';

// Import JSX Styles
import useStyles from './HomeStyles';

const Home = ({ShipOptions , BestFoodPacks}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Hero />
            <ShippingInfo ShipOptions={ShipOptions} />
            <BestOfMonthPack BestFoodPacks={BestFoodPacks} />
            <GetApplication />
        </div>
    )
}

export default Home;
