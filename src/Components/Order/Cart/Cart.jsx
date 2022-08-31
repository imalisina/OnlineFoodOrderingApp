import React , { useState } from 'react';
import { Grid , IconButton , Tooltip , Divider , Dialog , DialogTitle , DialogContent , DialogContentText , Typography , List , ListItem , Button, Container , Chip } from '@mui/material';
import '@fontsource/roboto/300.css';

// Import SPA Link
import { Link } from 'react-router-dom';

// Import JSX Styles
import useStyles from './CartStyles';

// Import Cart Icon
import LocalMallIcon from '@mui/icons-material/LocalMall';

// Import Verified Icon
import VerifiedIcon from '@mui/icons-material/Verified';

// Import Payment Icon
import PaymentsIcon from '@mui/icons-material/Payments';

// Import Gift Icon
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

// Import Add & Remove Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Import Close Icon
import CancelIcon from '@mui/icons-material/Cancel';

const Cart = ({cartItems , onAdd , onRemove}) => {

    const classes = useStyles();

    // Open And Close Cart State & Methods
    const [ open , setOpen ] = useState(false);

    const OpenCart = () => {
        setOpen(true);
    }

    const CloseCart = () => {
        setOpen(false);
    }
    // Open And Close Cart State & Methods

    // CheckOut Info
    const ItemsPrice = cartItems.reduce((a , c) => a + c.price * c.quantity , 0);
    const TaxPrice = ItemsPrice * 0.14;
    const ShippingPrice = ItemsPrice > 2000 ? 0 : 80;
    const TotalPrice = ItemsPrice + TaxPrice + ShippingPrice;
    // CheckOut Info

    return (
        <>
            <IconButton className={classes.CartIcon} onClick={OpenCart}>
                <LocalMallIcon fontSize="large" />
            </IconButton>
            <Grid className={classes.root}>
                <Dialog fullScreen className={classes.CartContainer} open={open} onClose={CloseCart}>
                    <DialogTitle className={classes.CartHeader}>Cart</DialogTitle>
                    <Divider className={classes.Divider} />
                    <DialogContent className={classes.CartContent}>
                        {
                            // Check If There Is No Item In Cart Shows 'No Item' Message
                            // Else Show Items
                            cartItems.length === 0 
                            ? <Typography variant="h2" className={classes.NoItem}>Let's <Link className={classes.NoItemLink} onClick={CloseCart} to="/order">Add</Link> Some Foods To Your Card</Typography>
                            : cartItems.map((cartItem , index) => {
                                return(
                                    <Grid key={index}>
                                        <List>
                                            <ListItem className={classes.CartFood}>
                                                <Container>
                                                    <Typography variant="h4">{cartItem.title}</Typography>
                                                    {cartItem.vip ? <Chip className={classes.VipChip} label="VIP" icon={<VerifiedIcon className={classes.VipChipIcon} />} /> : null}
                                                </Container>
                                                <Container>
                                                    <Button className={classes.FoodButton} onClick={() => onAdd(cartItem)} variant="contained" color="primary"><AddIcon /></Button>
                                                    <Typography className={classes.FoodInfo} variant="h5">{cartItem.quantity}x {cartItem.price} $</Typography>
                                                    <Button className={classes.FoodButton} onClick={() => onRemove(cartItem)} variant="contained" color="error"><RemoveIcon /></Button>
                                                </Container>
                                            </ListItem>
                                        </List>
                                        <Container>
                                            <Divider />
                                        </Container>
                                    </Grid>
                                )
                            })
                        }
                    </DialogContent>
                    {
                     cartItems.length <= 0
                     ? null
                     : (
                         <Container className={classes.AllPrice}>
                            <Container>
                                <Typography variant="h6" color="GrayText">$ {ItemsPrice}</Typography>
                                <Divider />
                                <Typography variant="h6" color="GrayText">$ {TaxPrice}</Typography>
                                <Divider />
                                {
                                    ShippingPrice === 0
                                    ? <Typography variant="h6" color="error" className={classes.Gift}>Free</Typography>
                                    : <Typography variant="h6" color="GrayText">$ {ShippingPrice}</Typography>
                                }
                                <Divider />
                                <Typography variant="h5">$ {TotalPrice}</Typography>
                                <Divider />
                            </Container>
                         </Container>
                     )
                    }
                    <Container className={classes.CartButtons}>
                        { cartItems.length <= 0
                          ? null
                          : (
                            <IconButton className={classes.EndButtons}>
                                <Tooltip title="CheckOut" arrow>
                                    <PaymentsIcon fontSize="large" />
                                </Tooltip>
                            </IconButton>
                          ) 
                        }
                        <IconButton className={classes.EndButtons} onClick={CloseCart}>
                            <Tooltip title="Close Cart" arrow>
                                <CancelIcon fontSize="large" />
                            </Tooltip>
                        </IconButton>
                    </Container>
                </Dialog>
            </Grid>
        </>
    )
}

export default Cart
