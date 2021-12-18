import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DreamCarCard from './DreamCarCard/DreamCarCard';

const DreamsCar = () => {
    const [cars, setCars] = useState();
    useEffect(() => {
        fetch('https://nameless-river-31605.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [cars])
    return (
        <Container sx={{ marginBottom: '5rem' }}>
            <div
                data-aos="zoom-in"
                style={{
                    width: 'fit-content',
                    margin: '4rem auto',
                    textAlign: 'center',
                    padding: '0 2rem',
                    borderLeft: '4px solid #1e88e5',
                    borderRight: '4px solid #1e88e5'
                }}>
                <p style={{
                    backgroundColor: '#1e88e5',
                    color: 'white',
                    fontWeight: 'bold'
                }}>ONE CLICK AWAY TO GET THIS BEAUTY</p>
                <h2>THE WORLD OF AUTOS</h2>
            </div>
            {!cars ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars?.map(car => <DreamCarCard
                            key={car._id}
                            car={car}
                        ></DreamCarCard>)
                    }
                </Grid>
            }
        </Container>
    );
};

export default DreamsCar;