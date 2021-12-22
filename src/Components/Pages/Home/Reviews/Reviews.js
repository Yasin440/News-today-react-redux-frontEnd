import { CircularProgress, Container } from '@mui/material';
import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReviews } from '../../../../features/Slice/newsSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
    const dispatch = useDispatch();
    const allReview = useSelector(state => state.news.allReview);
    useEffect(() => {
        dispatch(fetchAllReviews());
    }, [dispatch])
    return (
        <Container>
            <div data-aos="zoom-in">
                <h2 className="title">OUR HAPPY USER</h2>
            </div>
            {!allReview.length ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >

                    {
                        allReview?.map(review => <SwiperSlide key={review._id}><ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard></SwiperSlide>)
                    }
                </Swiper>
                // <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                //     {
                //         allReview?.map(review => <ReviewCard
                //             key={review._id}
                //             review={review}
                //         ></ReviewCard>)
                //     }
                // </Grid>
            }
        </Container>

    );
};

export default Reviews;