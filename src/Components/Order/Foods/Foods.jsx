import React from 'react';
import { Container , Grid , Typography , Skeleton , Chip , Card , CardContent , CardMedia , CardActions , IconButton } from '@mui/material';
import '@fontsource/roboto/300.css';

// Import AddToCart Icon
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// Import Verified Icon
import VerifiedIcon from '@mui/icons-material/Verified';

// Import JSX Styles
import useStyles from './FoodsStyles';

const Foods = ({foods , onAdd}) => {

    const classes = useStyles();

    return (
        <>
            {
                foods.map((food) => {
                    return(
                        <Card elevation={3} sx={{ minWidth: 275 }} key={food.id} className={classes.FoodCard}>
                            {
                                food.img
                                ? <CardMedia src="Image Directory" width="100%" height="300px" />
                                : <Skeleton variant="rectangular" animation="wave" width="100%" height="200px" />
                            }
                            <CardContent>
                                <div className={classes.FoodInfo}>
                                    <Typography variant="h6">{food.title}</Typography>
                                    {food.vip ? <Chip className={classes.VipChip} color="error" size="small" label="VIP" icon={<VerifiedIcon />} /> : null}
                                </div>
                                <Typography variant="h4" color="GrayText">{food.price} $</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton onClick={() => onAdd(food)} className={classes.AddToCartButton}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default Foods
