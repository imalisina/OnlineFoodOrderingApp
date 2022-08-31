import React from 'react';
import { Typography , Container , Grid , Divider } from "@mui/material";
import '@fontsource/roboto';

// Import JSX Styles
import useStyles from './BestOfMonthPackStyles';

// Import Best Of Month Package Card Component
import BestOfMonthCard from './Best Of Month Card/BestOfMonthCard';


const BestOfMonthPack = ({BestFoodPacks}) => {
    
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography className={classes.BestOfMonthHeader} variant="h3">Best Of Delivero</Typography>
            <Divider className={classes.Divider} />
            <br />
            <Grid container justifyContent="center" className={classes.PackItemsContainer}>
                { BestFoodPacks.map((packItem) => {
                    return(
                        <BestOfMonthCard key={packItem.id} packItem={packItem} />
                    );
                }) }
            </Grid>
        </Container>
    );
}

export default BestOfMonthPack;