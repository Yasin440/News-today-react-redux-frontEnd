import React, { useState, useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress, Container } from '@mui/material';
import OrderModal from './OrderModal/OrderModal';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const DetailsOfNews = () => {
    //modal=====
    const [openModal, setOpeModal] = React.useState(false);
    const handleOpen = () => setOpeModal(true);
    const handleClose = () => setOpeModal(false);
    //======
    const { detailId } = useParams();
    const [newsDetails, setNewsDetails] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/newsDetails/${detailId}`)
            .then(res => res.json())
            .then(data => setNewsDetails(data))
    }, [detailId])
    return (
        <div>
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
                }}>GET LEARN IN DETAILS</p>
                <h2>and ONE CLICK TO GET THIS CAR</h2>
            </div>
            {!newsDetails ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Container>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 348, height: 260 }}>
                                <Img alt="img" src={newsDetails.picture} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={5}>
                                <Grid item xs>
                                    <Typography variant="h5" component="div">
                                        {newsDetails.name}
                                    </Typography>
                                    <Typography style={{ fontWeight: 'bold' }} variant="subtitle2." color="text.secondary">
                                        Category: {newsDetails.category}
                                    </Typography><br />
                                    <Typography style={{ fontWeight: 'bold' }} variant="subtitle2." color="text.secondary">
                                        Publish On: {newsDetails.date}
                                    </Typography><br />
                                    <Typography style={{ fontWeight: 'bold' }} variant="subtitle2." color="text.secondary">
                                        Publish By: {newsDetails.by}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {newsDetails.details}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={handleOpen} sx={{ fontWeight: 'bold' }} variant="outlined">Place Order</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            }
            <OrderModal
                carDetails={newsDetails}
                openModal={openModal}
                handleClose={handleClose}
            ></OrderModal>
            <Footer></Footer>
        </div>
    );
};

export default DetailsOfNews;