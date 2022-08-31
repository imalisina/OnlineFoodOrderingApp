import React from 'react';
import { Container , Chip, Typography , Divider } from '@mui/material';
import '@fontsource/roboto/300.css';

// Import Icons
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

// Import Support Form Component
import SupportFields from "./Support Fields/SupportFields";

// Import JSX Styles
import useStyles from './SupportStyles';

const Support = () => {
    
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Chip label="Delivero Support" icon={<QuestionAnswerIcon className={classes.SupportChipIcon} />} className={classes.SupportChip} />
            <Typography className={classes.SupportHeaderTxt} variant="body1" color="GrayText">Fill The Form To Contact With Delivero Support</Typography>
            <Divider className={classes.Divider} />
            <br />
            <SupportFields />
        </Container>
    )
}

export default Support;