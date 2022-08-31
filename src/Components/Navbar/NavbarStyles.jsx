import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    Root:{

    },
    Container:{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px auto",
    },
    Logo:{
        cursor: "pointer",
        color: 'black',
        transition: "0.5s",
        '&:hover':{
            color: "#ED1C24",
            transition: "0.5s",
        }
    },
    MenuItem:{
        display: "inline",
        margin: "0px 30px",
        listStyleType: "none",
    },
    MenuItemLink:{
        color: "white",
        padding: "8px 10px !important",
        borderRadius: "30px !important",
        transition: "0.5s",
        '&:hover':{
            color:"#ED1C24",
            transition: "0.5s",
        },
    },
    RouteLink:{
        color: "inherit",
        textDecoration: "none",
    },
}));