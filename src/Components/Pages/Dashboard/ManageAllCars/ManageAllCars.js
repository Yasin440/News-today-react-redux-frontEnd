import React from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
import ManageCarCard from './ManageCarCard/ManageCarCard';

const ManageAllCars = () => {
    const { cars } = useAuth();
    return (
        <Container>
            <div
                data-aos="zoom-in"
                style={{
                    width: 'fit-content',
                    margin: '1rem auto 3rem auto',
                    textAlign: 'center',
                    padding: '0 2rem',
                    borderLeft: '4px solid #1e88e5',
                    borderRight: '4px solid #1e88e5'
                }}>
                <p style={{
                    backgroundColor: '#1e88e5',
                    color: 'white',
                    fontWeight: 'bold'
                }}>As An Admin</p>
                <h2>MANAGE ALL CARS</h2>
            </div>
            {!cars ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars?.map(car =>
                            <ManageCarCard
                                key={car._id}
                                car={car}
                            ></ManageCarCard>
                        )
                    }
                </Grid>
            }
        </Container>
    );
};

export default ManageAllCars;