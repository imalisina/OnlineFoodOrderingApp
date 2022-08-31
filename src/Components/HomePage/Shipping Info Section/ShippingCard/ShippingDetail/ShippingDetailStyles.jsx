import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        textAlign: 'center',
        margin: '60px auto',
    },
    Header:{
        backgroundColor: '#ED1C24 !important',
        color: "white !important",
        fontSize: "50px !important",
        fontWeight: 'light !important',
        padding: '50px 30px !important',
        borderRadius: "60px !important",
    },
    Verified:{
        borderRadius: '40px !important',
        width: "30% !important",
        textAlign: 'center !important',
        margin: "20px auto !important",
        backgroundColor: '#ED1C24 !important',
        color: 'white !important',
    },
    VerifyIcon:{
        color: 'white !important',
    },
    SaveTime:{
        borderRadius: '40px !important',
        width: "30% !important",
        textAlign: 'center !important',
        margin: "20px auto !important",
        backgroundColor: '#ED1C24 !important',
        color: 'white !important',
    },
    SpeedIcon:{
        color: 'white !important',
    },
    Description:{
        margin: '20px auto !important',
    },
    Price:{
        border: '2px dotted #ED1C24 !important',
    },
    Companies:{
        margin: '10px auto !important',
    }
}));