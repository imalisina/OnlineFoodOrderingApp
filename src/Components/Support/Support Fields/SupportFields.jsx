import React from 'react';
import { Container , Grid , Typography , TextField } from '@mui/material';

// Import JSX Styles
import useStyles from './SupportFieldsStyles';

// Import Support Inputs Component
import SupportItem from './Support Filed Item/SupportItem';


const SupportField = () => {

    const classes = useStyles();

    // Form Input Info
    const FormData = [
        {'id': 1 , 'label': "First Name" , 'variant':"outlined"},
        {'id': 2 , 'label': "Last Name" , 'variant':"outlined"},
        {'id': 3 , 'label': "Email" , 'variant':"outlined"},
        {'id': 4 , 'label': "Phone Number" , 'variant':"outlined"},
        {'id': 5 , 'label': "Subject" , 'variant':"outlined" , options:['Order' , 'Offers' , 'Technical' , 'Privacy & Policy' , 'Terms Of Use' , 'FAQ' , 'Others']},
        {'id': 6 , 'label': "Description" , 'variant':"outlined"},
    ];

    return (
        <Container>
            <Grid container justifyContent="center">
                <SupportItem FormData={FormData}/>
            </Grid>
        </Container>
    )
}

export default SupportField;