import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import Typography from '@mui/material/Typography';
import { Alert, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const style2 = {
    width: '75%',
    my: '.7rem',
}

const AddNews = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const [img, setImg] = useState(null);
    //add new car to cars in database
    const addNewNews = data => {
        const formData = new FormData();
        formData.append('picture', img);
        formData.append('by', data.clientName);
        formData.append('name', data.title);
        formData.append('date', new Date().toLocaleString());
        formData.append('category', data.category);
        formData.append('details', data.details);
        formData.append('email', user.email);
        fetch('https://peaceful-river-87601.herokuapp.com/addNews', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(event => {
                if (event.insertedId) {
                    setSuccess(true);
                    reset();
                }
            })
    }
    const currencies = [
        {
            value: '01',
            label: 'Covid-19',
        },
        {
            value: '02',
            label: 'Sports',
        },
        {
            value: '03',
            label: 'Travel',
        },
        {
            value: '04',
            label: 'Business',
        },
        {
            value: '06',
            label: 'Entertainment',
        },
        {
            value: '07',
            label: 'Video',
        },
        {
            value: '08',
            label: 'Others',
        },
    ];
    return (
        <div>
            <div data-aos="zoom-in">
                <h2 className="title" style={{ marginTop: 0 }}>Add Latest News</h2>
            </div>
            <div>
                <form style={{ textAlign: 'center' }}
                    className='w-75 m-auto'
                    onSubmit={handleSubmit(addNewNews)} >
                    <Typography
                        data-aos="slide-down"
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                    >
                        Add a Latest News
                    </Typography>
                    <TextField
                        required
                        {...register("clientName")}
                        defaultValue={user.displayName}
                        id="standard-basic"
                        label="Your Name"
                        type='text'
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    <TextField
                        disabled
                        defaultValue={user.email}
                        id="standard-basic"
                        label="Email"
                        type='email'
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    <TextField
                        required
                        {...register("title")}
                        id="standard-basic"
                        label="News Title"
                        type='text'
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    <TextField
                        required
                        onChange={e => setImg(e.target.files[0])}
                        accept='image/*'
                        id="standard-basic"
                        label="IMG"
                        type="file"
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    <TextField
                        required
                        {...register("category")}
                        id="standard-basic"
                        select
                        sx={style2}
                        label="Category"
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
                        {...register("details")}
                        id="standard-textarea"
                        label="Full News"
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    {success &&
                        <Alert className='w-50 m-auto' severity="success">**{user.displayName} Successfully Add a Latest News as Admin</Alert>
                    }
                    <Button
                        data-aos="slide-up"
                        type='submit'
                        sx={{
                            width: 'fitContent',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            margin: '3rem auto',
                            display: 'block'
                        }}
                        variant="outlined">Add News
                    </Button>
                </form>
            </div>


        </div>
    );
};

export default AddNews;