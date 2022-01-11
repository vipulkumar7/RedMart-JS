import React from 'react'
import { imagePath } from '../utils/images';

const Footer = () => {
    const date = new Date();
    let currentYear = date.getFullYear();
    return (
        <>
            <div className="footer" id="footer">
                <div className="footer-container">
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
        </>
    )
}

export default Footer
