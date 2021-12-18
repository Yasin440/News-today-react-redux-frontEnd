import { Card, Grid } from '@mui/material';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const ReviewCard = ({ review }) => {
    const { name, rating, Comment } = review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    sx={{ width: '75%', margin: 'auto' }}
                    image="https://i.ibb.co/2PW79fv/user-Avatar.png"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography component="legend">Rate of Review</Typography>
                    <Rating name="read-only" value={parseInt(rating)} readOnly />
                    <Typography variant="body2" color="text.secondary">
                        {Comment.slice(0, 30)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ReviewCard;