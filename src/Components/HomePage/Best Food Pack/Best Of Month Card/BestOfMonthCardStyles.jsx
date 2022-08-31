import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    MainContainer:{
        
    },
    PackItems:{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        flexGrow: '1',
        flexDirection: 'row',
        // flexWrap: "wrap",
        margin: '10px 25px',
    },
    PackContent:{
        marginTop: "20px !important",
    },
    ItemHeader:{
        fontWeight: 'bold !important',
    },
    PackContentChip:{
        color: "#ED1C24 !important",
        padding: '10px auto !important',
    },
    PackChip:{
        color: "#ED1C24 !important",
        padding: '15px 30px !important',
        marginTop: '10px !important',
        fontSize: '20px !important',
        fontWeight: 'bold',
        border: '3px dotted #ED1C24 !important'
    },
    DetailsButtonContainer:{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '0px auto',
    },
    DetailsButton:{
        marginTop: "10px !important",
        backgroundColor: '#ED1C24 !important',
        color: 'white !important',
        borderRadius: "30px !important",
        transition: '0.5s',
        '&:hover':{
            backgroundColor: 'white !important',
            color: '#ED1C24 !important',
            transition: '0.5s',
        }
    }
}));