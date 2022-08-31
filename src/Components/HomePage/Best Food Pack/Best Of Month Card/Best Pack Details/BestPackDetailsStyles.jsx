import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        margin: '30px auto',
    },
    MainInfo:{
        display: 'flex !important',
        justifyContent: 'space-around !important',
        flexDirection: 'row !important',
        flexWrap: 'nowrap !important',
        mariginTop: '40px !important',
        marginBottom: '40px !important',
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
        textAlign: 'cetner !important',
    },
    Media:{
        border: '3px solid #ED1C24 !important',
        borderRadius: '10px !important',
    },
    MediaChip:{
        color: '#ED1C24 !important',
        border: '3px solid #ED1C24 !important',
    },
    MediaTxt:{
        textAlign: 'center !important',
        marginTop: '120px !important',
    },
    MediaMain:{
        margin: '20px !important',
    },
    MediaSecondary:{
        fontSize: '30px !important',
        color: '#ED1C24 !important',
        padding: "30px 20px !important",
        borderRadius: "60px !important",
        border: '3px solid #ED1C24 !important',
    },
}));