import React from 'react';
import { Button , Container } from '@mui/material';

const PlatformItems = ({ApplicationData}) => {

    return (
        <Container>
            <Button>
                <img src={ApplicationData[0].img} width={ApplicationData[0].width} height={ApplicationData[0].height}/>
            </Button>
            <Button>
                <img src={ApplicationData[1].img} width={ApplicationData[1].width} height={ApplicationData[1].height}/>
            </Button>
            <Button>
                <img src={ApplicationData[2].img} width={ApplicationData[2].width} height={ApplicationData[2].height}/>
            </Button>
        </Container>
    )
}

export default PlatformItems;
