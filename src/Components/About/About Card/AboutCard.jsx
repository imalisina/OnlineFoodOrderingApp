import React from 'react';
import { Container , Card , CardContent , Typography } from '@mui/material';


// Import JSX Styles
import useStyles from './AboutCardStyles';

const AboutCard = ({ CardData }) => {

    const classes = useStyles();

    return(
        <Card elevation={3} className={classes.root}>
            <CardContent className={classes.CardContent}>
                <Container>
                    <Typography className={classes.CardHeader} variant="h3">{CardData.title}</Typography>
                    <Typography className={classes.CardSecondary} color="GrayText" variant="body2">{CardData.description}</Typography>
                </Container>
            </CardContent>
        </Card>
    );
}

export default AboutCard;