import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const style2 = {
    width: '100%',
    my: '.5rem',
}

const OrderModal = ({ openModal, handleClose, carDetails }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    //SEND ordered data to DB through BackEnd
    const onSubmit = data => {
        const result = window.confirm('Are you sure to get this car??');
        if (result) {
            data.email = user.email;
            data.status = 'Pending';
            data.carDetails = carDetails;
            fetch('https://nameless-river-31605.herokuapp.com/orderedCars', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            alert('Ordered Placed Successfully');
            reset();
            navigate('/explore_all_cars');
        }
    };
    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form className='w-75 m-auto' onSubmit={handleSubmit(onSubmit)} >
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Place Order Form
                    </Typography>
                    <TextField
                        required
                        {...register("name")}
                        defaultValue={user.displayName}
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        sx={style2}
                    />
                    <TextField
                        disabled
                        {...register("email")}
                        defaultValue={user.email}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        sx={style2}
                    />
                    <TextField
                        required
                        {...register("mobile")}
                        id="standard-basic"
                        label="Mobile"
                        variant="standard"
                        type='number'
                        sx={style2}
                    />
                    <TextField
                        required
                        {...register("address")}
                        id="standard-textarea"
                        label="Address"
                        variant="standard"
                        sx={style2}
                    />
                    <Button type='submit' sx={{ fontWeight: 'bold', marginTop: '20px' }} variant="outlined">Place Order</Button>
                </form>
            </Box>
        </Modal>
    )
};
export default OrderModal;