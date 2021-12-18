import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img data-aos="zoom-in" src="https://i.ibb.co/tLvN9m9/slider1.jpg" className="d-block w-100" alt="img" />
                    <div className="carousel-caption d-none d-md-block" data-aos="fade-down">
                        <h3 style={{ borderBottom: '4px solid #1e88e5' }}>FIND YOUR DREAM</h3>
                        <h1 style={{ fontSize: '3.4rem' }}>Lamborghini Aventador</h1>
                        <h4>MODEL 2015 <span style={{ backgroundColor: '#1E88E5', padding: '5px 8px', fontWeight: 'bolder' }}>$184,900</span></h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/jb85XHj/slider2.jpg" className="d-block w-100" alt="img" />
                    <div data-aos="fade-down" className="carousel-caption d-none d-md-block">
                        <h3 style={{ borderBottom: '4px solid #1e88e5' }}>FIND YOUR DREAM</h3>
                        <h1 style={{ fontSize: '3.4rem' }}>Lamborghini Aventador</h1>
                        <h4>MODEL 2015 <span style={{ backgroundColor: '#1E88E5', padding: '5px 8px', fontWeight: 'bolder' }}>$184,900</span></h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/pwpDg42/slider3.jpg" className="d-block w-100" alt="img" />
                    <div data-aos="fade-down" className="carousel-caption d-none d-md-block">
                        <h3 style={{ borderBottom: '4px solid #1e88e5' }}>FIND YOUR DREAM</h3>
                        <h1 style={{ fontSize: '3.4rem' }}>Lamborghini Aventador</h1>
                        <h4>MODEL 2015 <span style={{ backgroundColor: '#1E88E5', padding: '5px 8px', fontWeight: 'bolder' }}>$184,900</span></h4>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;