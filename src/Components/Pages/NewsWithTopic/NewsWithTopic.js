import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NewsCard from '../Home/News/NewsCard/NewsCard';
import { useParams } from 'react-router-dom';

const NewsWithTopic = () => {
    const { topic } = useParams()
    const [news, setNews] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/news/${topic}`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [topic])
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