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
        fetch('https://nameless-river-31605.herokuapp.com/clients/makeAdmin', {
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
                }}>As An Admin</p>
                <h3>YOU HAVE TO MAKE ANYONE ADMIN </h3>
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