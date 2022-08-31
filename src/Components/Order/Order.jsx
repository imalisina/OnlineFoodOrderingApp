import React , { useState } from 'react';
import { Container , Typography , Card , CardContent , CardMedia , CardActions , IconButton , Chip , Badge , Grid , Skeleton } from '@mui/material';
import '@fontsource/roboto/300.css';

// Import JSX Styles
import useStyles from './OrderStyles';

// Import Foods Component
import Foods from './Foods/Foods';

// Import Cart Component
import Cart from './Cart/Cart';


const Order = () => {

    const foods = [
        {'id': 1 , 'img': false , 'title': 'Gamer Menu' , 'price': 70 , 'vip': false , quantity: 0},
        {'id': 3 , 'img': false , 'title': 'Iskender Kebap' , 'price': 134 , 'vip': true , quantity: 0},
        {'id': 2 , 'img': false , 'title': 'Royal Menu' , 'price': 110 , 'vip': true , quantity: 0},
        {'id': 4 , 'img': false , 'title': 'Dominoss Pizza' , 'price': 62 , 'vip': false , quantity: 0},
        {'id': 5 , 'img': false , 'title': 'Mega Menu' , 'price': 250 , 'vip': true , quantity: 0},
        {'id': 6 , 'img': false , 'title': 'Döner Kebap' , 'price': 94 , 'vip': true , quantity: 0},
        {'id': 7 , 'img': false , 'title': 'Döner Pizza' , 'price': 78 , 'vip': true , quantity: 0},
        {'id': 8 , 'img': false , 'title': 'Persian Royal Kebap' , 'price': 560 , 'vip': true , quantity: 0},
    ];

    const classes = useStyles();

    // Cart & Badge Count With Methods For Cart
    const [ cartItems , setCartItems ] = useState([]);
    const [ orderCount , setOrderCount ] = useState(0);

    // Add Food To Cart
    const onAdd = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if(exist){
            setCartItems(
                cartItems.map((x) => x.id === food.id ? {...exist , 'quantity': exist.quantity+1} : x)
            )
        } else {
            setCartItems([...cartItems , {...food , quantity: 1}]);
        }
        setOrderCount(orderCount+1);
    };

    // Remove Food From Cart
    const onRemove = ( food ) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if(exist.quantity === 1){
            setCartItems(cartItems.filter((x) => x.id !== food.id ));
        } else {
            setCartItems(
                cartItems.map((x) => x.id === food.id ? {...exist , 'quantity': exist.quantity-1} : x)
            );
        }
        setOrderCount(orderCount-1);
    };

    // Cart & Badge Count With Methods For Cart

    return (
            <Container className={classes.root}>
                <Grid container justifyContent="center">
                    <Badge color="error" overlap="circular" badgeContent={orderCount}>
                        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
                    </Badge>
                </Grid>
                <Foods foods={foods} onAdd={onAdd} />
        </Container>
    )
}

export default Order;