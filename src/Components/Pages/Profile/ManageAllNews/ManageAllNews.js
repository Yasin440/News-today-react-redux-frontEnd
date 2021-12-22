import React, { useEffect } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import ManageAllNewsCard from './ManageAllNewsCard/ManageAllNewsCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllNews } from '../../../../features/Slice/newsSlice';

const ManageAllNews = () => {
    const dispatch = useDispatch();
    let allNews = useSelector(state => state.news.allNews);
    useEffect(() => {
        dispatch(fetchAllNews());
    }, [dispatch, allNews])
    return (
        <Container>
            <div data-aos="zoom-in">
                <h2 className="title" style={{ marginTop: 0 }}>Manage All News</h2>
            </div>
            {!allNews.length ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allNews?.map(news =>
                            <ManageAllNewsCard
                                key={news._id}
                                news={news}
                                allNews={allNews}
                            ></ManageAllNewsCard>
                        )
                    }
                </Grid>
            }
        </Container>
    );
};

export default ManageAllNews;