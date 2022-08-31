import React, { useState } from 'react';
import { Grid , TextField , FormControl , Select , MenuItem , InputLabel , Button , Container , Backdrop , CircularProgress } from '@mui/material';

// Import Icon
import SendIcon from '@mui/icons-material/Send';

// Import JSX Styles
import useStyles from './SupportItemStyles';


const SupportItem = ({ FormData }) => {

    const classes = useStyles();

    // Create Hook For Select Input
    const [ subject , setSubject ] = useState('');

    // Start BackDrop Section Hooks & Attributes
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };
    // End BackDrop Section Hooks & Attributes

    return (
        <Grid item className={classes.FormContainer}>
            <div className={classes.FormContainer}>
                <TextField className={classes.FormInput} variant={FormData[0].variant} label={FormData[0].label}/>
                <TextField className={classes.FormInput} variant={FormData[1].variant} label={FormData[1].label}/>
            </div>
            <TextField className={classes.FullWidthFormInput} variant={FormData[2].variant} label={FormData[2].label} />
            <div className={classes.FormContainer}>
                <TextField className={classes.FormInput} variant={FormData[3].variant} label={FormData[3].label}/>
                <FormControl className={classes.FormInput}>
                    <InputLabel>{FormData[4].label}</InputLabel>
                    <Select label={FormData[4].label} value={subject} onChange={(event) => setSubject(event.target.value)} variant={FormData[4].variant}>
                        {FormData[4].options.map((option , index) => {
                            return(
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <TextField className={classes.FullWidthFormInput} multiline maxRows={100} variant={FormData[5].variant} label={FormData[5].label}/>
            <Container>
                <Button onClick={handleToggle} className={classes.SubmitButton} variant="contained" endIcon={<SendIcon />}>
                    Submit
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
                        <CircularProgress className={classes.Spinner} />
                    </Backdrop>
                </Button>
            </Container>
        </Grid>
    )
}


export default SupportItem
