import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import Typography from '@mui/material/Typography';
import { Alert, Button } from '@mui/material';

const style2 = {
    width: '75%',
    my: '.7rem',
}

const AddCar = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const [img, setImg] = useState(null);
    //add new car to cars in database
    const addNewCar = data => {
        if (!img & !data.picture) {
            alert('Please add an img or an img URL..!!');
            return;
        }
        const formData = new FormData();
        formData.append('picture2', img);
        formData.append('picture', data.picture);
        formData.append('clientName', data.clientName);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('details', data.details);
        formData.append('email', user.email);
        fetch('https://nameless-river-31605.herokuapp.com/addCars', {
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
    return (
        <div>
            <div
                data-aos="zoom-in"
                style={{
                    width: 'fit-content',
                    margin: '1rem auto 2rem auto',
                    textAlign: 'center',
                    padding: '0 2rem',
                    borderLeft: '4px solid #1e88e5',
                    borderRight: '4px solid #1e88e5'
                }}>
                <p style={{
                    backgroundColor: '#1e88e5',
                    color: 'white',
                    fontWeight: 'bold'
                }}>EXPLORE A NEW CAR</p>
                <h2>ADD BRAND NEW CARD</h2>
            </div>
            <div style={{
                backgroundImage: 'url(https://i.ibb.co/D8qx1QP/carsBg.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <form style={{ textAlign: 'center' }}
                    className='w-75 m-auto'
                    onSubmit={handleSubmit(addNewCar)} >
                    <Typography
                        data-aos="slide-down"
                        id="modal-modal-title"
                        variant="h5"
                        component="h2">
                        Add a New Car
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
                        {...register("email")}
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
                        {...register("name")}
                        id="standard-basic"
                        label="Car Name"
                        type='text'
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    <TextField
                        {...register("picture")}
                        id="standard-basic"
                        label="Car IMG URL"
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    <TextField
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
                        {...register("price")}
                        id="standard-basic"
                        label="Car Price"
                        variant="standard"
                        type='number'
                        sx={style2}
                        data-aos="slide-up"
                    />
                    <TextField
                        required
                        {...register("details")}
                        id="standard-textarea"
                        label="Car Details"
                        variant="standard"
                        sx={style2}
                        data-aos="slide-up"
                    />
                    {success &&
                        <Alert className='w-50 m-auto' severity="success">**{user.displayName} Successfully Add a Car as Admin</Alert>
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
                        variant="outlined">Add Car
                    </Button>
                </form>
            </div>


        </div>
    );
};

export default AddCar;