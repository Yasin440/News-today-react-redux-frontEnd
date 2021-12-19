import React from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ManageOrderCard from './ManageOrderCard/ManageOrderCard';

const ManageAllOrders = () => {
    const { manageAllOrders } = useAuth();
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
                }}>ADMIN CAN MANAGE CLIENTS ORDERS</p>
                <h2>MANAGE ALL ORDERS</h2>
            </div>
            {!manageAllOrders ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <>
                    {
                        manageAllOrders.length === 0 ?
                            <Alert severity="info">
                                <AlertTitle>Please Reload after Order</AlertTitle>
                                <strong>There is no Order to Show! </strong>
                            </Alert>
                            :
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {
                                    manageAllOrders?.map(manageOrders =>
                                        <ManageOrderCard
                                            key={manageOrders._id}
                                            manageOrders={manageOrders}
                                        ></ManageOrderCard>
                                    )
                                }
                            </Grid>
                    }
                </>
            }
        </Container>
    );
};

export default ManageAllOrders;