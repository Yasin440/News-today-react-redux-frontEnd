import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import NewsCard from '../Home/News/NewsCard/NewsCard';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewsWithTopic } from '../../../features/Slice/newsSlice';

const NewsWithTopic = () => {
    //redux==
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.newsOnTopic);
    const { topic } = useParams()
    useEffect(() => {
        dispatch(fetchNewsWithTopic(topic))
    }, [dispatch, topic])
    //===
    return (
        <div>
            <Container sx={{ marginBottom: '5rem' }}>
                <div data-aos="zoom-in">
                    <h2 className="title">Latent News On {topic}</h2>
                </div>
                {!news ?
                    <div style={{ textAlign: 'center' }}>
                        <CircularProgress sx={{ my: 3 }} />
                    </div>
                    :
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            news?.map(singleNews => <NewsCard
                                key={singleNews._id}
                                news={singleNews}
                            ></NewsCard>)
                        }
                    </Grid>
                }
            </Container>
        </div>
    );
};

export default NewsWithTopic;