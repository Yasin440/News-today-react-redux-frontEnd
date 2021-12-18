import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer py-5 mt-5'>
            <div className="container text-light">

                <div className="copy text-center">
                    <img style={{ width: '15%' }} src="https://i.ibb.co/Wc690Sj/logo-removebg-preview.png" alt="logo" />
                    <p className="mt-3">&copy;-<span>World Class Car</span>-Rights reserved by World-class-car</p>
                </div>
                <div className='downFooter'>
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <p>Privacy</p>
                            <p>Terms</p>
                            <p>Conditions</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center social">
                            <p><i className="fab fa-twitter"></i></p>
                            <p><i className="fab fa-facebook"></i></p>
                            <p><i className="fab fa-linkedin"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;