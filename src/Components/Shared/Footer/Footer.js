import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className='footer py-5 mt-5'>
            <div className="container text-light">

                <div className="copy text-center">
                    <p className="mt-3">&copy;-<span>React Redux-toolkit</span>-Rights reserved by Md Yasin Miah</p>
                </div>
                <div className='downFooter'>
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <p>Privacy</p>
                            <p>Terms</p>
                            <p>Conditions</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center social">
                            <FacebookIcon />
                            <GitHubIcon sx={{ marginX: "2rem" }} />
                            <LinkedInIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;