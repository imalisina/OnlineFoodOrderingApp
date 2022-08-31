import React from 'react';
import { Container, Chip , Grid , Divider , Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

// Import About Icon
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

// Import About Section Components
import AboutCard from './About Card/AboutCard';
import Testimonials from './Testimonials/Testimonials';

// Import JSX Styles
import useStyles from './AboutStyles';

const About = () => {

    const classes = useStyles();

    // Card Data For AboutCard Component
    const CardData = {
         'id': 1 ,
         'img': false ,
         'title': 'What Is Delivero ?' ,
         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ea illum? Placeat, numquam quidem fugiat, non, libero exercitationem eaque reprehenderit et eos fugit veritatis atque obcaecati laudantium iure odit rerum!'
        }

    // Testimonials Data Form Testimonials Component
    const TestimonialsData = [
        {'id': 1 , 
         'img': false,
         'title': 'McDonald\'s',
         'rating': 3.5,
         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ea illum? Culpa, ea illum? Placeat, numquam quidem  Placeat . . .',
        },
        {'id': 2 , 
         'img': false,
         'title': 'Amazon',
         'rating': 4.5,
         'description': 'sit amenem eaque reprehenderit et eos  Culpa, ea illum? Placeat, numquam quidem  fugit veritatis atque obcaecati !',
        },
        {'id': 3 , 
         'img': false,
         'title': 'Uber',
         'rating': 3,
         'description': 'Culpa, ea illum? P illum? veritatis atque amenem laudantium iure odit rerum !',
        },
    ]

    return(
        <Container className={classes.root}>
            <Chip label="About Delivero" className={classes.AboutChip} icon={<LiveHelpIcon className={classes.AboutChipIcon}/>} />
            <Grid container justifyContent="center">
                <AboutCard CardData={CardData} />
            </Grid>
            <Grid className={classes.Testimonials}>
                <Typography className={classes.CostumersHeader} variant="h3">Our Costumers</Typography>
                <Divider className={classes.Divider} />
                <Testimonials TestimonialsData={TestimonialsData} />
            </Grid>
        </Container>
    )
}

export default About;