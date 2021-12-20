import { Card, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SaveIcon from '@mui/icons-material/Save';

const NewsCard = ({ news }) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, cursor: 'pointer' }} data-aos="flip-right">
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
                        {news.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {news.details.slice(0, 110)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/newsDetails/${news._id}`}><Button sx={{ fontWeight: 'bold' }} variant="outlined"><VisibilityIcon sx={{ marginRight: '8px' }} /> Read</Button>
                    </Link>
                    <span className="read-later" title='Read later'><SaveIcon /></span>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewsCard;