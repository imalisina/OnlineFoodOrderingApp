import React from 'react';
import { Typography , Rating , Grid , Skeleton , Card , CardContent , Avatar , Container } from '@mui/material';

// Import Like Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Import JSX Styles
import useStyles from './TestimonialsStyles';

const Testimonials = ({ TestimonialsData }) => {
    
    const classes = useStyles();

    return (
        <>
            {
                TestimonialsData.map(( data ) => {
                    return(
                        <Grid sx={{ flexGrow: 1 }} container key={data.id}>
                            <Container>
                                <Card elevation={3} className={classes.CompanyCard}>
                                    <CardContent>
                                        <div>
                                            { data.img 
                                                ? <Avatar src="daock" width="80px" height="80px" />
                                                : <Skeleton className={classes.CompnayImage} animation="wave" variant="circular" width="80px" height="80px" /> 
                                            }
                                            <Typography className={classes.CompanyName} variant="h3">{data.title}</Typography>
                                        </div>
                                        <Typography className={classes.CompanyDescription} variant="body1">{data.description}</Typography>
                                        <Rating className={classes.CompanyRating} precision={0.5} size="large" readOnly defaultValue={data.rating} icon={<FavoriteIcon />} emptyIcon={<FavoriteBorderIcon />}/>
                                    </CardContent>
                                </Card>
                            </Container>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default Testimonials;
