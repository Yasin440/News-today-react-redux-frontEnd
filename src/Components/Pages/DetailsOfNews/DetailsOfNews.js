import React, { useState, useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const DetailsOfNews = () => {
    const navigate = useNavigate();
    //======
    const { detailId } = useParams();
    const [newsDetails, setNewsDetails] = useState();
    useEffect(() => {
        fetch(`https://peaceful-river-87601.herokuapp.com/newsDetails/${detailId}`)
            .then(res => res.json())
            .then(data => setNewsDetails(data))
    }, [detailId])
    return (
        <div>
            <h2 className="title">{newsDetails?.name.slice(0, 30)}...</h2>
            {!newsDetails ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Container>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 348, height: 260 }}>
                                <Img alt="img" src={newsDetails.picture || `data:image/*;base64,${newsDetails.picture2}`} />
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
                                    <Button onClick={() => navigate(-1)} sx={{ fontWeight: 'bold' }} variant="outlined">Go Back</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            }
            <Footer></Footer>
        </div>
    );
};

export default DetailsOfNews;