import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root:{
        marginTop: "40px !important",
        textAlign: "center",
    },
    Divider:{
        backgroundColor: "#D2D2D2 !important",
        height: '2px !important',
    },
    SocialLinksHeader:{
        marginTop: '20px !important',
    },
    SocialLinks:{
        transition: "0.5s",
        '&:hover':{
            backgroundColor: '#ED1C24 !important',
            color: 'white !important',
            transition: '0.5s'
        }
    },
    FooterTxt:{
        marginTop: "20px !important",
        fontSize: "10px !important"
    },
}));