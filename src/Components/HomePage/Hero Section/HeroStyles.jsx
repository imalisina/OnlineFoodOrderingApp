import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    root:{
        padding: '60px 0px',
        width: "100%",
        height: "auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: 'row',
        flexGrow: '1',     
    },
    HeroContent:{
       marginLeft: '30px',
       textAlign: 'center',
    },
    HeroTxt:{
        color: "#ED1C24",
    },
    HeroDescription:{
        width: '65%',
        lineHeight: '40px !important',
        display: 'inline-block',
        margin: "0px auto",
    },
    HeroButton:{
        backgroundColor: "#ED1C24 !important",
        marginTop: '10px !important',
        color: "white !important",
        borderRadius: "30px !important",
        transition: "0.5s",
        '&:hover':{
            backgroundColor: "white !important",
            color: "#ED1C24 !important",
            transition: "0.5s"
        }
    },
    HeroMedia:{
        marginRight: '30px',
    },
    DividerContainer:{
        textAlign: 'center',
        margin: "50px auto",
    },
    Divider:{
        display: "inline-block",
        width: "80%",
        height: "2px",
        borderRadius: "30px",
        backgroundColor: "#D2D2D2 !important",
    },
}));