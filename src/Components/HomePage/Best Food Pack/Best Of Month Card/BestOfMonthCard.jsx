import React from 'react';
import { Card , CardContent , CardMedia , Grid , CardActions , Button , Stack , Chip , Typography , Skeleton } from '@mui/material';
import '@fontsource/roboto';

// Import JSX Styles
import useStyles from './BestOfMonthCardStyles';

// Import SPA Link
import { Link } from 'react-router-dom';


const BestOfMonthCard = ({packItem}) => {

    const classes = useStyles();

    return (
        <Grid className={classes.MainContainer}>
        <Card key={packItem.id} className={classes.PackItems} elevation={3}>
               {/* Use Skeleton Instead Of Static Image File */}
               { packItem.img ? <CardMedia component="img" src="/cadkc/cadc" width="200px" height="200px" alt="Card Image" /> 
                          : <Skeleton animation="wave" variant="rectangular" width="400px" height="200px" />
               }
               <CardContent className={classes.PackContent}>
                   <Typography className={classes.ItemHeader} variant="h4" gutterBottom color="textPrimary">{packItem.title}</Typography>
                   <Typography variant="body1" gutterBottom color="textSecondary">{packItem.description}</Typography>
                   <Stack>
                       <Chip className={classes.PackContentChip} color="default" label={packItem.foods} />
                   </Stack>
                   <Chip className={classes.PackChip} color="default" label={packItem.price} />
               </CardContent>
               <CardActions className={classes.DetailsButtonContainer}>
                   <Link to={"/order/fastfoods/bestpacks/" + packItem.id}>
                    <Button className={classes.DetailsButton} variant="contained" color="inherit" startIcon={packItem.icon}>See Package</Button>
                   </Link>
               </CardActions>
        </Card>
        </Grid>
    )
}

export default BestOfMonthCard;
