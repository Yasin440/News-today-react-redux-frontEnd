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
            <div data-aos="zoom-in">
                <h2 className="title">OUR HAPPY USER</h2>
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