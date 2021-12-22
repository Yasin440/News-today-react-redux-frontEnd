import { Button, Card, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux'
import { removeFromReadLater } from '../../../../features/Slice/newsSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const ReadingListCard = ({ news }) => {
    const dispatch = useDispatch();
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
                        {news.category} || {news.date}
                    </Typography>
                    <Typography variant="body2" color="blue">
                        {news.by}
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
                    <span onClick={() => dispatch(removeFromReadLater(news._id))} className="read-later" title='Remove'><DeleteIcon /></span>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ReadingListCard;