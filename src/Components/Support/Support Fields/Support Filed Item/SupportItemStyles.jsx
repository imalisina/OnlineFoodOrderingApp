import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    FormContainer:{
        width: '100% !important',
        height: "auto !important",
        display: 'flex !important',
        justifyContent: 'center !important',
        flexDirection: 'row !important',
        flexWrap: 'wrap !important',
    },
    FormInput:{
        width: "40% !important",
        margin: '20px 6px !important',
    },
    FullWidthFormInput:{
        width: '81% !important',
    },
    SubmitButton:{
        margin: "10px auto !important",
        backgroundColor: "#ED1C24 !important",
        color: "white !important",
        padding: "8px 20px !important",
        borderRadius: "40px !important",
        transition: "0.5s",
        '&:hover':{
            backgroundColor: "white !important",
            color: "#ED1C24 !important",
            transition: "0.5s",
        }
    },
    Spinner:{
        backgroundColor: "#ED1C24 !important",
        color: "#ED1C24 !important",
        borderRadius: "10px !important",
        padding: "20px !important",
    },
}));