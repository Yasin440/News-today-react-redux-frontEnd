import { Card } from '@mui/material';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import 'swiper/css';

const ReviewCard = ({ review }) => {
    const { name, rating, Comment } = review;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{ width: '58%', margin: 'auto' }}
                image="https://i.ibb.co/Jr3zwv6/user-Profile.png"
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
    );
};

export default ReviewCard;