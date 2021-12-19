import { Container, Grid, Typography, TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';

const style2 = {
    width: '75%',
    mt: 2
}

const AddReview = () => {
    const { user } = useAuth();
    const [ratingSuccess, setRatingSuccess] = useState();
    const { register, handleSubmit, reset } = useForm();
    const addReview = data => {
        fetch('https://nameless-river-31605.herokuapp.com/ratings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(event => {
                if (event.insertedId) {
                    setRatingSuccess(true);
                    reset();
                }
            })
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography data-aos="fade-down" sx={{ mb: 4 }} variant="h6" gutterBottom component="div">
                        Hit a Reviews
                    </Typography>
                    {ratingSuccess &&
                        <Alert className='w-100 m-auto' severity="success"> Successfully Posted your Rating.Go Home Page to View</Alert>
                    }
                    <form data-aos="fade-up" onSubmit={handleSubmit(addReview)}>
                        <TextField
                            required
                            {...register("name")}
                            defaultValue={user?.displayName}
                            id="standard-basic"
                            label="Your Name"
                            type='text'
                            variant="standard"
                            sx={style2}
                        />
                        <TextField
                            disabled
                            {...register("email")}
                            defaultValue={user?.email}
                            id="standard-basic"
                            label="Email"
                            type='email'
                            variant="standard"
                            sx={style2}
                        />
                        <TextField
                            required
                            {...register("rating")}
                            id="standard-basic"
                            label="Rating out of 5"
                            type='number'
                            variant="standard"
                            sx={style2}
                        />
                        <TextField
                            required
                            {...register("Comment")}
                            id="standard-textarea"
                            label="Comment"
                            variant="standard"
                            sx={style2}
                        />
                        <Button sx={{ width: '75%', my: 4, fontWeight: 600 }} type="submit" variant="contained">Make Review</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img data-aos="zoom-in" width='90%' src="https://i.ibb.co/D4pL7dt/review.jpg.png" alt="img" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddReview;