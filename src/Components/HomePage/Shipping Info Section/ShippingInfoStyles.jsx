import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        textAlign: 'center',
    },
    ShippingSectionHeader:{
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
    ShippingItems:{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        flexGrow: '1',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
}));