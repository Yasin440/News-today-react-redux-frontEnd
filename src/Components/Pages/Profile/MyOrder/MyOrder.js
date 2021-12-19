import React from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ManageMyOrderCard from './ManageMyOrderCard/ManageMyOrderCard';
import useAuth from '../../../../Hooks/useAuth';

const MyOrder = () => {
    const { manageMyOrders } = useAuth();

    return (
        <Container>
            <div data-aos="zoom-in">
                <h2 className="title" style={{ marginTop: 0 }}>Your Saved News</h2>
            </div>
            {!manageMyOrders ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <>
                    {
                        manageMyOrders.length === 0 ?
                            <Alert severity="info">
                                <AlertTitle>Please Reload after Order</AlertTitle>
                                <strong>There is no Order to Show! </strong>
                            </Alert>
                            :
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                                {
                                    manageMyOrders?.map(manageOrders =>
                                        <ManageMyOrderCard
                                            key={manageOrders._id}
                                            manageOrders={manageOrders}
                                        ></ManageMyOrderCard>
                                    )
                                }
                            </Grid>
                    }
                </>
            }
        </Container>
    );
};

export default MyOrder;