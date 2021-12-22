import { Card, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageAllNewsCard = ({ news, allNews }) => {
    const handleDelete = () => {
        const confirm = window.confirm("Are You Sure To DELETE This News..?");
        if (confirm) {
            fetch(`https://peaceful-river-87601.herokuapp.com/all_News/delete/${news._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("DELETE Successfully");
                        const remain = allNews.filter(data => data._id !== news._id);
                        allNews = remain;
                    }
                })
        }

    }
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }} data-aos="fade-up">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={news.picture || `data:image/*;base64,${news.picture2}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {news.name.slice(0, 40)}...
                    </Typography>
                    <Typography variant="body2" color="blue">
                        {news.category} || {news.date}
                    </Typography>
                    <Typography variant="body2" color="blue">
                        {news.by}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {news.details.slice(0, 110)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={handleDelete}
                        sx={{ fontWeight: 'bold' }}
                        color="error"
                        startIcon={<DeleteIcon />}
                        variant="outlined">Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ManageAllNewsCard;