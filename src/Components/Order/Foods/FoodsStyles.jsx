import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    FoodCard:{
        margin: '15px auto !important',
    },
    FoodInfo:{
        display: "flex !important",
        justifyContent: "space-between !important",
        flexDirection: "row !important",
        flexWrap: 'wrap !important',
    },
    VipChip:{
        backgroundColor: "#ED1C24 !important",
        color: "white !important",
        marginTop: "5px !important",
    },
    AddToCartButton:{
        backgroundColor: "white !important",
        color: "#ED1C24 !important",
    },
}));