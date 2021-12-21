import React from 'react';
import News from '../News/News';
import Footer from '../../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <News></News>
            <div style={{
                backgroundColor: '#e6e6e6fa',
                paddingTop: '1px',
                paddingBottom: '5rem'
            }}>
                <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Home;