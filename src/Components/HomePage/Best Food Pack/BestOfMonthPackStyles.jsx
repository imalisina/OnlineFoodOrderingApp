import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        textAlign: 'center',
        margin: '150px auto !important',
    },
    BestOfMonthHeader:{
        color: 'black',
    },
    Divider:{
        width: "50%",
        textAlign: 'center !important',
        margin: "10px auto !important",
        borderRadius: "30px",
        backgroundColor: '#ED1C24',
        height: "3px",
    },
    PackItemsContainer:{
        width: "100%",
        height: "auto",
    },
}));