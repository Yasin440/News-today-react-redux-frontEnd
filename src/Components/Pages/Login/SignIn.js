import { React, useState } from 'react';
import './SignIn.css';
import { CircularProgress, Alert } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SignIn = () => {
    const [registerData, setRegisterData] = useState();
    const [isRegister, setIsRegister] = useState(false);
    const [retypePassError, setRetypePassError] = useState(false);
    const { signInWithGoogle, logInWithEmailPassword, registerWithEmailPassword, loading, error } = useAuth();
    const navigate = useNavigate();
    const [alert, serAlert] = useState(false);
    const location = useLocation();
    const redirect_url = location.state?.from || '/';


    const toggleLoginAndOut = even => {
        setIsRegister(even.target.checked);
    }
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleRegistration = (e) => {
        if (registerData.password !== registerData.rePassword) {
            setRetypePassError(true)
            return;
        }
        else {
            registerWithEmailPassword(registerData.email, registerData.password, registerData.name, navigate)
        }
        e.preventDefault()
    }
    //redirect user with google
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                navigate(redirect_url);
            })
    }

    const handleLogInWithEmailPass = (e) => {
        logInWithEmailPass(registerData.email, registerData.password);
        e.preventDefault()
    }
    //redirect user with google
    const logInWithEmailPass = (email, password) => {
        logInWithEmailPassword(email, password)
            .then(result => {
                if (error) {
                    serAlert(true);
                    return;
                }
                else {
                    navigate(redirect_url);
                }
            })
    }


    return (
        <div className="signIn">
            <div className="screen">
                <div className="screen__content">
                    {loading ?
                        <div style={{ textAlign: 'center' }}>
                            <CircularProgress sx={{ my: 3 }} />
                        </div>
                        :
                        <>
                            {
                                isRegister ?
                                    <form style={{ paddingTop: "20px" }} className="login" onSubmit={handleRegistration}>
                                        {
                                            retypePassError &&
                                            <Alert severity="error">Password didn't Match — check it out!</Alert>
                                        }
                                        {error &&
                                            <Alert severity="error">{error}</Alert>
                                        }
                                        <div className="login__field">
                                            <span className="login__icon"><PersonIcon /></span>
                                            <input required onBlur={handleOnBlur} name="name" type="text" className="login__input" placeholder="Name" />
                                        </div>
                                        <div className="login__field">
                                            <span className="login__icon"><PersonIcon /></span>
                                            <input required onBlur={handleOnBlur} name="email" type="text" className="login__input" placeholder="Email" />
                                        </div>
                                        <div className="login__field">
                                            <span className="login__icon"><LockIcon /></span>
                                            <input required onBlur={handleOnBlur} name="password" type="password" className="login__input" placeholder="Password" />
                                        </div>
                                        <div className="login__field">
                                            <span className="login__icon"><LockIcon /></span>
                                            <input required onBlur={handleOnBlur} name="rePassword" type="password" className="login__input" placeholder="Re_type Password" />
                                        </div>

                                        <button className="button login__submit">
                                            <span className="button__text">Register Now</span><DoubleArrowIcon />
                                        </button>
                                    </form>
                                    :
                                    <form className="login" onSubmit={handleLogInWithEmailPass}>
                                        {alert &&
                                            <Alert severity="error">Username Or Password is Not Correct..!!</Alert>
                                        }
                                        <div className="login__field">
                                            <span className="login__icon"><PersonIcon /></span>
                                            <input required onBlur={handleOnBlur} name="email" type="text" className="login__input" placeholder="Email" />
                                        </div>
                                        <div className="login__field">
                                            <span className="login__icon"><LockIcon /></span>
                                            <input required onBlur={handleOnBlur} name="password" type="password" className="login__input" placeholder="Password" />
                                        </div>
                                        <button className="button login__submit">
                                            <span className="button__text">Log In Now</span><DoubleArrowIcon />
                                        </button>
                                    </form>
                            }
                        </>
                    }

                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <span className="social-login__icon" onClick={handleGoogleLogin}><GoogleIcon /></span>
                            <span className="social-login__icon"><GitHubIcon /></span>
                            <span className="social-login__icon"><FacebookIcon /></span>
                        </div>
                        <div className="form-check">
                            <input required onChange={toggleLoginAndOut} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Create account?</label>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div >
    );
};

export default SignIn;