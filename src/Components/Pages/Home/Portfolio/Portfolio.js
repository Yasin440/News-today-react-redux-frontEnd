import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Portfolio = () => {
    return (
        <div>
            <section id="portfolio">
                <div className="container-fluid">
                    <div
                        data-aos="zoom-in"
                        style={{
                            width: 'fit-content',
                            margin: '4rem auto',
                            textAlign: 'center',
                            padding: '0 2rem',
                            borderLeft: '4px solid #1e88e5',
                            borderRight: '4px solid #1e88e5'
                        }}>
                        <p style={{
                            backgroundColor: '#1e88e5',
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                        }}>Check some your crush</p>
                        <h3>FEATURES PORTFOLIO</h3>

                    </div>
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 col-11">
                            <p className="text-black-50 font-weight-normal small text-center">A luxury car is a car that provides increased levels of comfort, equipment, amenities, quality, performance, and status compared to regular cars for an increased price.The term is subjective and reflects both the qualities of the car and the brand image of its manufacturer.</p>
                        </div>
                    </div>

                    <div className="row no-gutters justify-content-center">
                        <div className="p-0 col-lg-3 col-sm-6">
                            <img src="https://i.ibb.co/pvXxPfH/portfolio.png" className="img-fluid w-100" alt="img" data-aos="slide-up" />
                        </div>
                        <div className="p-0 col-lg-3 col-sm-6">
                            <img src="https://i.ibb.co/zVshVyD/portfolio2.png" className="img-fluid w-100" alt="img" data-aos="flip-right" />
                        </div>
                        <div className="p-0 col-lg-3 col-sm-6">
                            <img src="https://i.ibb.co/rFrj1rK/portfolio3.png" className="img-fluid w-100" alt="img" data-aos="flip-left" />
                        </div>
                        <div className="p-0 col-lg-3 col-sm-6">

                            <img src="https://i.ibb.co/QYDCd1Q/portfolio4.png" className="img-fluid w-100" alt="img" data-aos="slide-up" />
                        </div>
                        <div className="p-0 col-lg-3 col-sm-6">
                            <img src="https://i.ibb.co/JjghzQm/portfolio5.png" className="img-fluid w-100" alt="img" data-aos="slide-up" />
                        </div>
                        <div className="p-0 col-lg-3 col-sm-6">
                            <img src="https://i.ibb.co/nncz7YQ/portfolio6.png" className="img-fluid w-100" alt="img" data-aos="flip-left" />
                        </div>
                        <div className="p-0 col-lg-3 col-sm-6">
                            <img src="https://i.ibb.co/7GbSFgq/portfolio7.png" className="img-fluid w-100" alt="img" data-aos="flip-left" />
                        </div>
                        <div className="p-0 col-lg-3 col-sm-6">
                            <img src="https://i.ibb.co/HGPDpqH/portfolio8.png" className="img-fluid w-100" alt="img" data-aos="slide-up" />
                        </div>
                    </div>
                </div>
                <div className="bg-dark">
                    <div className="container">
                        <div className="row p-5 ">
                            <div data-aos="zoom-out" className="text-white col-lg-2 col-sm-6 mb-3 text-center">
                                <h1 className="counter">
                                    {/* count Up */}
                                    <CountUp end={590} duration={1} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <h6>Customers</h6>
                            </div>
                            <div data-aos="zoom-out" className="text-white col-lg-2 col-sm-6 mb-3 text-center">
                                <h1 className="text-white counter">
                                    {/* count Up */}
                                    <CountUp end={34} duration={1} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <h6>Show Rooms</h6>
                            </div>
                            <div data-aos="zoom-out" className="text-white col-lg-2 col-sm-6 mb-3 text-center">
                                <h1 className="counter">
                                    {/* count Up */}
                                    <CountUp end={232} duration={1} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <h6>Features Added</h6>
                            </div>
                            <div data-aos="zoom-out" className="text-white col-lg-2 col-sm-6 mb-3 text-center">
                                <h1 className="counter">
                                    {/* count Up */}
                                    <CountUp end={5} duration={1} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>M
                                </h1>
                                <h6>Facebook Like</h6>
                            </div>
                            <div data-aos="zoom-out" className="text-white col-lg-2 col-sm-6 mb-3 text-center">
                                <h1 className="counter">
                                    {/* count Up */}
                                    <CountUp end={6} duration={1} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>M
                                </h1>
                                <h6>Twitter Follower</h6>
                            </div>
                            <div data-aos="zoom-out" className="text-white col-lg-2 col-sm-6 mb-3 text-center">
                                <h1 className="counter">
                                    {/* count Up */}
                                    <CountUp end={696} duration={1} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <h6>Great Services</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;