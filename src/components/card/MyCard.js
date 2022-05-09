import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

export default function MyCard(props) {

    return (
        <div style={{ marginTop: "5px" }}>
            <Card
                sx={{
                    maxWidth: 350,
                    borderRadius: '16px'
                }}
            >

                <CardMedia
                    component="img"
                    height="194"
                    image={props.img}
                    alt="Burger"
                />

                <CardHeader
                    align='center'
                    title={props.name}
                    subheader={props.provider}
                >
                </CardHeader>

                <CardContent>

                    <div align="right">
                        <Button
                            sx={{
                                borderTopLeftRadius: "15px",
                                border: 1
                            }}
                        >
                            <ArrowForwardIcon sx={{ color: '#f21b1b' }} />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
