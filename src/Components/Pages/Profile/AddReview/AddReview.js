import { Container, Grid, Typography, TextField, Button, Alert, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';

const style2 = {
    width: '75%',
    mt: 2
}

const AddReview = () => {
    const { user } = useAuth();
    const [ratingSuccess, setRatingSuccess] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const addReview = data => {
        fetch('http://localhost:5000/ratings', {
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
    const currencies = [
        {
            value: '1',
            label: '1',
        },
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
        {
            value: '4',
            label: '4',
        },
        {
            value: '5',
            label: '5',
        }
    ];

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
                            select
                            sx={style2}
                            label="Rating out of 5"
                            variant="standard"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
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
                    <img data-aos="zoom-in" width='90%' src="https://i.ibb.co/F4vg4Rr/reviews.png" alt="img" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddReview;