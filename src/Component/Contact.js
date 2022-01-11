import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faCartPlus,
    faHome,
    faShoppingBag,
    faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imagePath } from "../utils/images";

const Contact = () => {
    const date = new Date();
    let currentYear = date.getFullYear();
    return (
        <div id="page-container">
            <div className="container">
                <div className="navbar">
                    <div className="logo cursor">
                        <img src={imagePath.logo} alt="logo" width="125px" />
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li>
                                <NavLink to="/" exact activeClassName="navHeader">
                                    <FontAwesomeIcon icon={faHome} /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" activeClassName="navHeader">
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" activeClassName="navHeader">
                                    <FontAwesomeIcon icon={faCartPlus} /> Cart
                                    <span className="header-cart-value"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="navHeader">
                                    <FontAwesomeIcon icon={faAddressCard} /> About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="navHeader">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <span className="cursor">
                                    Sign In <FontAwesomeIcon icon={faSignInAlt} />
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <span>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </span>
                    <img src={imagePath.menu} alt="menu" className="menu-icon" />
                </div>
            </div>
            <div id="content-wrap">
                <p>
                    Pariatur consectetur nisi ex tempor. Sunt sint incididunt laboris
                    consectetur irure est veniam eiusmod. Aliqua exercitation labore amet
                    est magna nostrud ipsum ut ex non aliqua cupidatat ad. Labore sit
                    velit labore reprehenderit dolor. Officia id aute fugiat consequat
                    duis incididunt sit nulla fugiat aliquip. Veniam anim amet elit aute
                    elit non dolore. Sint deserunt tempor excepteur est voluptate magna
                    tempor aliqua aliqua eu cillum laborum. Eu irure commodo qui anim
                    irure. Sit pariatur ipsum reprehenderit dolore veniam deserunt eu in
                    in. Voluptate ad aute quis officia sunt Lorem dolore sint. Eiusmod
                    tempor incididunt do quis. Quis magna incididunt proident ullamco
                    occaecat ea occaecat in dolore laborum aute. Sint amet laboris labore
                    velit sint voluptate qui consequat commodo nulla. Labore irure mollit
                    incididunt dolor dolore sit dolor duis cillum irure magna commodo
                    elit. Anim esse aute laboris esse enim sint. Ipsum incididunt occaecat
                    commodo deserunt elit esse consequat veniam sit et ut labore occaecat.
                    Exercitation esse amet mollit deserunt eu nulla mollit nostrud laborum
                    exercitation fugiat commodo. Esse sint magna dolor ea officia duis
                    aute anim elit quis. Deserunt nisi ut dolore nostrud. Occaecat anim
                    deserunt dolor exercitation non et eu velit tempor aliqua irure. Sint
                    aute voluptate cillum excepteur excepteur velit qui cillum anim
                    voluptate deserunt nisi commodo. Ut magna do proident non qui pariatur
                    non et excepteur adipisicing consequat consectetur tempor. Lorem magna
                    adipisicing magna occaecat do culpa velit irure. Nostrud esse
                    exercitation incididunt velit.
                </p>
                <br />

            </div>
            <div id="footer">
                <div
                    className="footer-container"
                >
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download our App</h3>
                            <p>Download App from Android and ios mobile phone</p>
                            <div className="app-logo">
                                <img src={imagePath.playStore} alt="play-store" />
                                <img src={imagePath.appStore} alt="app-store" />
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src={imagePath.logoWhite} alt="logo-white" />
                            <p>Our Purpose Is To Sustainably Make The Pleasure and
                                Benefits of Sports Accessible to the Many.
                            </p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">Copyright @{currentYear}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
