import React from 'react';
import { Card , CardContent , CardMedia , CardActions , Button , Stack , Chip , Typography , Skeleton } from '@mui/material';
import '@fontsource/roboto';

// Import SPA Link
import { Link } from 'react-router-dom'

// Import JSX Styles
import useStyles from './ShippingCardStyles';

const ShippingCard = ({item}) => {

    const classes = useStyles();

    return (
        <Card key={item.id} className={classes.ShippingItems} elevation={3}>
               {/* Use Skeleton Instead Of Static Image File */}
               { item.img ? <CardMedia component="img" src="/cadkc/cadc" width="200px" height="200px" alt="Card Image" /> 
                          : <Skeleton animation="wave" variant="rectangular" width="300px" height="200px" />
               }
               <CardContent>
                   <Typography variant="h5" gutterBottom color="textPrimary">{item.title}</Typography>
                   <Typography variant="body1" gutterBottom color="textSecondary">{item.description}</Typography>
                   <Stack>
                       <Chip className={classes.ShippingCompanyChip} color="default" label={item.company} />
                   </Stack>
                   <Chip className={classes.ShippingChip} color="default" label={item.price} />
               </CardContent>
               <CardActions className={classes.DetailsButtonContainer}>
                   <Link to={ "/details/shipping/options/" + item.id }>
                       <Button className={classes.DetailsButton} variant="contained" color="inherit" startIcon={item.icon}>Show Details</Button>
                   </Link>
               </CardActions>
        </Card>
    )
}

export default ShippingCard;