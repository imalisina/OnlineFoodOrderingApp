import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        textAlign: 'center',
    },
    GetApplicationMain:{
        
    },
    GetApplicationSecondary:{
        color: 'grey',
        textAlign: 'center !important',
        marginTop: '10px !important',
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
    },  
    GetApplicationItems:{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        flexGrow: '1',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
}));