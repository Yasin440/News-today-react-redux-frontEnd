import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('https://nameless-river-31605.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
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
                }}>Wall of Love</p>
                <h3>Happy Clients Reviews</h3>
            </div>
            {!reviews ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews?.map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard>)
                    }
                </Grid>
            }
        </Container>

    );
};

export default Reviews;