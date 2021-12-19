import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard/NewsCard';

const News = () => {
    const [news, setNews] = useState();
    useEffect(() => {
        fetch('https://peaceful-river-87601.herokuapp.com/latestNews')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [news])
    return (
        <Container sx={{ marginBottom: '5rem' }}>
            <div data-aos="zoom-in">
                <h2 className="title">LATEST NEWS ON EARTH</h2>
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
    );
};

export default News;