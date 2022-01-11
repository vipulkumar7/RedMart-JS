import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { signUp } from '../redux/auth/authActions';
import { useDocumentTitle } from './setDocumentTitle';
import { imagePath } from '../utils/images';
import Loader from './Loader';

const Account = () => {

    const dispatch = useDispatch();
    useDocumentTitle('Sign Up');
    const auth = useSelector((state) => state.auth);
    const isLoading = useSelector(state => state.auth.isLoading);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({ name: "", email: "", password: "" });
    };

    if (auth._id) return <Redirect to="/" />;

    return (
        <div id="page-container">
            <Header />
            {isLoading ? <Loader />
                : <div className="account-page" id="content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img src={imagePath.image1} alt="image1" width="100%" />
                            </div>
                            <div className="col-2">
                                <div className="form-container">
                                    <div className="form-btn">
                                        <span>Register</span>
                                        <hr id='Indicator' />
                                    </div>
                                    <form id='RegForm' onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={user.name}
                                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={user.email}
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={user.password}
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        />
                                        <button type="submit" className="btn">Register</button>
                                        <NavLink to='/login'>Already a member? <span style={{ color: '#11C8B1' }}> Sign In </span></NavLink>
                                    </form>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            <Footer />
        </div>
    )
}

export default Account
