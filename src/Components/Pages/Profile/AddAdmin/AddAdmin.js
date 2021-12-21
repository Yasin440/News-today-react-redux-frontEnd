import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { Alert, Button } from '@mui/material';

const AddAdmin = () => {
    const [adminSuccess, setAdminSuccess] = useState(false);
    const [adminEmail, setAdminEmail] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const makeAdmin = data => {
        setAdminEmail(data.email);
        fetch('http://localhost:5000/user/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(e => {
                if (e.modifiedCount) {
                    setAdminSuccess(true);
                    reset();
                }
            })
    }
    return (
        <div>
            <div data-aos="zoom-in">
                <h2 className="title" style={{ marginTop: 0 }}>Add an admin</h2>
            </div>
            {adminSuccess &&
                <Alert className='w-50 m-auto' severity="success">**{adminEmail}** Successfully Add as Admin</Alert>
            }
            <form style={{ textAlign: 'center' }} className='w-75 m-auto' onSubmit={handleSubmit(makeAdmin)} data-aos="slide-up">
                <TextField
                    required
                    {...register("email")}
                    id="standard-basic"
                    label="Email"
                    type='email'
                    variant="standard"
                    sx={{ width: '75%', my: '.7rem' }}
                />
                <Button type='submit' sx={{ width: 'fitContent', textAlign: 'center', fontWeight: 'bold', margin: '20px auto', display: 'block' }} variant="outlined">Make Admin</Button>
            </form>
        </div>
    );
};

export default AddAdmin;