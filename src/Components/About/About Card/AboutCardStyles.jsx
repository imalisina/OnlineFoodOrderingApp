import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        width: '100%',
        height: "auto !important",
        borderRadius: "30px !important",
        border: '3px solid #ED1C24 !important',
    },
    CardContent:{
        margin: '20px auto !important',
    },
    CardHeader:{
        margin: '10px auto !important',
        fontWeight: "lighter !important",
        color: '#ED1C24 !important',
    },
    CardSecondary:{
        margin: '10px auto !important',
        textAlign: 'center !important',
        width: '50% !important',
        lineHeight: "30px !important"
    },
}));