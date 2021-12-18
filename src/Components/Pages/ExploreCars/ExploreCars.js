import { CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import DreamCarCard from '../Home/DreamsCar/DreamCarCard/DreamCarCard';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';


const ExploreCars = () => {
    const { cars } = useAuth();
    return (
        <>
            <Header></Header>
            <Container>
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
                    }}>GET READY TO EXPLORE</p>
                    <h2> WORLD CLASS LUXURY CARS</h2>
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
            <Footer></Footer>
        </>
    );
};

export default ExploreCars;