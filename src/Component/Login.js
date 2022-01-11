import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { signIn } from '../redux/auth/authActions';
import { useDocumentTitle } from './setDocumentTitle';
import { imagePath } from '../utils/images';
import Loader from './Loader';

const Login = () => {
    const auth = useSelector((state) => state.auth);
    const isLoading = useSelector(state => state.auth.isLoading);
    const dispatch = useDispatch();
    useDocumentTitle('Login');

    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds.email, creds.password));
        setCreds({ email: "", password: "" });
    };

    if (auth._id) return <Redirect to="/" />;
    return (
        <div id="page-container">
            <Header />
            {isLoading ? <Loader />
                :
                <div className="account-page" id="content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img src={imagePath.image1} alt="image1" width="100%" />
                            </div>
                            <div className="col-2">
                                <div className="form-container">
                                    <div className="form-btn">
                                        <span>Login</span>
                                        <hr id='Indicator' />
                                    </div>
                                    <form id='LoginForm' onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            placeholder="Enter Email"
                                            value={creds.email}
                                            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={creds.password}
                                            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                                        />
                                        <button type="submit" className="btn">Login</button>
                                        <NavLink to="/forgot-password">Forgot password</NavLink>
                                        <br />
                                        <NavLink to='/signup'>Click here for Sign up</NavLink>
                                    </form>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </div>
    )
}

export default Login;
