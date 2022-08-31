import React from 'react';
import { Typography , Skeleton , Grid , Chip } from '@mui/material';
import '@fontsource/roboto';

// Import JSX Styles
import useStyles from './BestPackDetailsStyles';

// Import Single Pack Details Component
import SinglePackDetail from './Single Pack Detail/SinglePackDetail';

const BestPackDetails = ({packItem}) => {

    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid className={classes.MainInfo}>
                <div className={classes.Media}>
                    { packItem.img 
                        ? <img src={packItem.img} width="300px" height="300px" /> 
                        : <Skeleton animation="wave" variant="rectangular" width="500px" height="500px" />
                    }
                </div>
                <div className={classes.MediaTxt}>
                    <Chip size="medium" label={packItem.icon} className={classes.MediaChip}/>
                    <Typography className={classes.MediaMain} variant="h2">{packItem.title}</Typography>
                    <Chip className={classes.MediaSecondary} label={"Price = " + packItem.price} />
                </div>
            </Grid>
            
            {/* Send PackItem Data To SinglePackDetail Component To Design Accordion */}
            <SinglePackDetail packContent={packItem.packDetail} packItem={packItem}/>
        </Grid>
    )
}

export default BestPackDetails;
