import React , { useState } from 'react';
import { Typography , Container , Accordion , AccordionSummary , AccordionDetails , Divider } from '@mui/material';
import '@fontsource/roboto';

// Import Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PaymentsIcon from '@mui/icons-material/Payments';

// Import JSX Styles
import useStyles from './SinglePackDetailStyles';

const SinglePackDetail = ({packContent , packItem}) => {

    const classes = useStyles();

    const [ expanded , setExpanded ] = useState(false);

    const HandleChange = (panel) => (event , isExpanded) => {
        setExpanded(isExpanded ? panel : true);
    }

    return (
        <Container className={classes.root}>
            <Accordion elevation={3} className={classes.AccordionContainer} expanded={expanded === "food1"} onChange={HandleChange('food1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" className={classes.ExpandIcon}/>} aria-controls="food1bh-content" id="food1bh-header">
                    <Typography className={classes.AccordionMainTxt} variant="h4">{packItem.title} Contents</Typography>
                </AccordionSummary>
                { packContent.map((item , index) => {
                    return(
                        <AccordionDetails key={index}>
                            <AddTaskIcon />
                            <Typography variant="body1">{item}</Typography>
                        </AccordionDetails>
                    )
                }) }
                <Divider className={classes.Divider} />
                <Typography className={classes.TotalPrice} variant="h4"><PaymentsIcon className={classes.PaymentsIcon} />Total = {packItem.price}</Typography>
            </Accordion>
        </Container>
    )
}

export default SinglePackDetail;
