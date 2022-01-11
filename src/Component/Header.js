import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { signOut } from '../redux/auth/authActions';
import { NavLink, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCartPlus, faHome, faShoppingBag, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { imagePath } from '../utils/images';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const myTotalCount = useSelector(state => state.cartReducer.myTotalCount);

    const handleSignOut = (e) => {
        e.preventDefault();
        swal("Are you sure you want to Log out?", {
            buttons: ["No", "Yes"],
        }).then(function (isConfirm) {
            if (isConfirm) {
                swal({
                    title: 'Logout!',
                    text: 'Successfully Logout!',
                    icon: 'success'
                })
                dispatch(signOut());
                history.push('/login');
            }
        })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        // dispatch(signIn());
        history.push('/login');
    }

    const onClickHomePage = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="logo cursor">
                        <img src={imagePath.logo} alt="logo" width="125px" onClick={(e) => { onClickHomePage(e) }} />
                    </div>
                    <nav>
                        <ul id='MenuItems'>
                            {auth.token ? (
                                <li>
                                    <NavLink to="/" exact activeClassName="navHeader" >
                                        <FontAwesomeIcon icon={faHome} />{' '} Home
                                    </NavLink>
                                </li>)
                                : ''}
                            {auth.token ? (
                                <li><NavLink to="/products" activeClassName="navHeader" >Products</NavLink></li>
                            ) : ''}
                            {auth.token ? (
                                <li>
                                    <NavLink to="/cart" activeClassName="navHeader">
                                        <FontAwesomeIcon icon={faCartPlus} />
                                        {' '}Cart
                                        <span className='header-cart-value'>
                                            {' '}{myTotalCount}
                                        </span>
                                    </NavLink>
                                </li>
                            ) : ''}
                            {auth.token ?
                                (<li>
                                    <NavLink to="/about" activeClassName="navHeader">
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        {' '}About
                                    </NavLink>
                                </li>)
                                : ''}
                            {/* {auth.token ? (
                                <li>
                                    <NavLink to="/contact" activeClassName="navHeader">Contact</NavLink>
                                </li>
                            ) : ''} */}
                            <li>
                                {auth.token ?
                                    (
                                        <span className='cursor' onClick={(e) => { handleSignOut(e) }}>
                                            <FontAwesomeIcon icon={faUser} />
                                            {" "} {auth.name}
                                        </span>
                                    )
                                    : (<span className='cursor' onClick={(e) => { handleSignIn(e) }}>
                                        Sign In{' '}
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                    </span>)
                                }
                            </li>
                        </ul>
                    </nav>
                    {/* <img src={imagePath.cart} alt="cart" width="30px" height="30px" /> */}
                    <span>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </span>
                    <img src={imagePath.menu} alt="menu" className="menu-icon" />
                </div>
            </div>
        </>
    )
}

export default Header;
