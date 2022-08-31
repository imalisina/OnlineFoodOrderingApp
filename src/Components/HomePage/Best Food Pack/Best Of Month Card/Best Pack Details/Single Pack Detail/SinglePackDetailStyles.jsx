import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        textAlign: 'center',
    },
    AccordionContainer:{
        backgroundColor: '#ED1C24 !important',
        color: "white !important",
        borderRadius: "40px !important",
    },
    ExpandIcon:{
        color: "white !important",
    },
    AccordionMainTxt:{
        width: '100% !important', 
        textAlign: 'center !important',
        flexShrink: '0 !important',
        marginLeft: "30px !important",
    },
    Divider:{
        backgroundColor: "#D2D2D2 !important",
        height: "1.5px !important",
        borderRadius: '60px',
        width: '50% !important',
        textAlign: 'center !important',
        margin: '20px auto !important',
    },
    TotalPrice:{
        margin: "20px auto !important",
    },
    PaymentsIcon:{
        margin: "0px 8px !important",
    }
}));