import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import NewsCard from './NewsCard/NewsCard';
import { useSelector, useDispatch } from 'react-redux'
import { fetchLatestNews } from '../../../../features/Slice/newsSlice';

const News = () => {
    const dispatch = useDispatch();
    const latestNews = useSelector(state => state.news.latestNews);
    useEffect(() => {
        dispatch(fetchLatestNews());
    }, [dispatch])
    return (
        <Container sx={{ marginBottom: '5rem' }}>
            <div data-aos="zoom-in">
                <h2 className="title">LATEST NEWS ON EARTH</h2>
            </div>
            {!latestNews ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        latestNews?.map(singleNews => <NewsCard
                            key={singleNews._id}
                            news={singleNews}
                        ></NewsCard>)
                    }
                </Grid>
            }
        </Container>
    );
};

export default News;