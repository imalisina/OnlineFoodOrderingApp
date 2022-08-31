import React from 'react';
import { Container , Typography , IconButton , Divider } from '@mui/material';

// Import Icons For Footer
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

// Imprort JSX Styles
import useStyles from './FooterStyle';

const Footer = () => {

    const SocialLinks = [
        {'id': 1 , 'name' : <InstagramIcon />},
        {'id': 2 , 'name' : <FacebookIcon />},
        {'id': 3 , 'name' : <RedditIcon />},
        {'id': 4 , 'name' : <PinterestIcon />},
        {'id': 5 , 'name' : <TwitterIcon />},
    ]

    const classes = useStyles();

    return(
        <Container className={classes.root}>
            <Divider className={classes.Divider} />
            <Typography className={classes.SocialLinksHeader} variant="body1" color="textSecondary">Follow Delivero On Social Media</Typography>
            <Container>
                {SocialLinks.map((SocialLink) => {
                    return(
                        <IconButton key={SocialLink.id} className={classes.SocialLinks}>
                            {SocialLink.name}
                        </IconButton>
                    );
                })}
            </Container>
            <Typography className={classes.FooterTxt} variant="subtitle1" color="textSecondary">All Rights Reserved <sup>&copy;</sup> | 1984 - 2021</Typography>
        </Container>
    );
}

export default Footer;