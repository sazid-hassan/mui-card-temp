import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MyCard from '../components/card/MyCard';

export default function Home() {

    const foods = [
        {
            id: 1,
            name: "Burger with Extra Cheese",
            provider: "Hungry Puppets",
            imgSrc: "./../../assets/foodpics/food1.jpeg",
            rating: "4.5"
        },
        {
            id: 2,
            name: "Naga Burger",
            provider: "Hungry Puppets",
            imgSrc: "./../../assets/foodpics/food2.jpg",
            rating: "4.4"
        },
        {
            id: 3,
            name: "Sweet Honey Burger",
            provider: "Hungry Puppets",
            imgSrc: "./../../assets/foodpics/food3.jpg",
            rating: "3.5"
        }
    ]

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#faffff', height: '100vh' }}>
                    {foods.map(food =>
                        <MyCard
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            provider={food.provider}
                            img={food.imgSrc}
                        />
                    )}
                </Box>
            </Container>
        </React.Fragment>
    );
}