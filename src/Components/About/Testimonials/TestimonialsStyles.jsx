import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    CompanyCard:{
        margin: '10px auto !important',
        borderRadius: '40px !important',
        width: "100% !important",
        height: '330px !important',
    },
    CompnayImage:{
        textAlign: 'center !important',
        margin: '10px auto !important',
    },
    CompanyName:{
        margin: "10px auto !important",
    },
    CompanyDescription:{
        width: "70% !important",
        lineHeight: '30px !important',
        textAlign: "center !important",
        margin: "10px auto !important",
    },
    CompanyRating:{
        marginTop: '10px !important',
        color: "#ED1C24 !important",
    }
}));