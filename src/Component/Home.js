import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faRupeeSign, faStar, faStarHalfAlt, } from '@fortawesome/free-solid-svg-icons'
import { addtoCart } from '../redux/cartPage/actions';
// import { getAllProduct, getExclusiveProduct, getFeaturedProduct, getLatestProduct, } from '../redux/productPage/actions';
import { getAllProduct, getExclusiveProduct, getFeaturedProduct, getLatestProduct, getQuotes } from '../redux/productPage/actionsJson';
import { useDocumentTitle } from './setDocumentTitle'
import Footer from './Footer';
import Header from './Header';
import { imagePath } from '../utils/images';
import Loader from './Loader';

const Home = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    useDocumentTitle('Home');

    const featureProductData = useSelector(state => state.productReducer.featureProductData);
    const latestProductData = useSelector(state => state.productReducer.latestProductData);
    const exclusiveProduct = useSelector(state => state.productReducer.exclusiveProduct);
    const productSpinner = useSelector(state => state.productReducer.productSpinner);
    const quotes = useSelector(state => state.productReducer.quotes);

    useEffect(() => {
        dispatch(getFeaturedProduct());
        dispatch(getLatestProduct());
        dispatch(getExclusiveProduct());
        dispatch(getAllProduct());
        dispatch(getQuotes());
    }, [dispatch]);

    const onClickProductDetails = (productID) => {
        history.push(`/product/${productID}`);
    }

    const onClickAddToCart = (e, productDescData) => {
        exclusiveProduct.quantity = 1;
        dispatch(addtoCart(productDescData));
    }

    return (
        <div id="page-container">
            <Header />
            <div id="content-wrap">
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <h1>Give Your Workout<br /> A New Style!</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quae doloribus voluptatibus,<br />
                                    tenetur
                                    pariatur fugit nobis assumenda itaque! </p>
                                <NavLink to="/products" className="btn">Explore Now &#8594;</NavLink>
                            </div>
                            <div className="col-2">
                                <img src={imagePath.image1} alt="image1.png" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Categories Start */}
                <div className="categories">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-3">
                                <img src={imagePath.category1} alt="category-1" />
                            </div>
                            <div className="col-3">
                                <img src={imagePath.category2} alt="category-2" />
                            </div>
                            <div className="col-3">
                                <img src={imagePath.category3} alt="category-3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Categories End */}

                {/* Featured Products Start */}

                <div className="small-container">
                    <h2 className="title">Featured Products</h2>
                    {productSpinner ? <Loader />
                        : (<div className="row">
                            {featureProductData?.map((product) => (
                                <div className="col-4"
                                    key={product.id}
                                    onClick={(e) => { onClickProductDetails(product.id) }}
                                >
                                    <NavLink to="/product-details">
                                        <img src={product.image} alt="product-1" width='230px' height='300px' />
                                    </NavLink>
                                    <NavLink to="/product-details">
                                        <h4>{product.title}</h4>
                                    </NavLink>
                                    <div className="rating">
                                        {[...Array(Math.floor(product.rating.rate)).keys()].map(n => (
                                            <FontAwesomeIcon icon={faStar} key={n} />
                                        ))}
                                        {[...Array(5 - Math.floor(product.rating.rate)).keys()].map(n => {
                                            return <FontAwesomeIcon icon={faStarHalfAlt} key={n} />
                                        })}
                                    </div>
                                    <p><FontAwesomeIcon icon={faRupeeSign} /> {product.price}</p>
                                </div>
                            ))}
                        </div>)
                    }
                </div>


                {/* Featured Products End */}

                {/* Featured Latest Start */}
                <div className="small-container">
                    <h2 className="title">Latest Products</h2>
                    {productSpinner ?
                        <SpinnerCircular className='spinner' size={200} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
                        : (<div className="row">
                            {latestProductData.map(product => (
                                <div className="col-4"
                                    key={product.id}
                                    onClick={(e) => { onClickProductDetails(product.id) }}
                                >
                                    <img src={product.image} alt="product-5" width='230px' height='300px' />
                                    <h4>{product.title}</h4>
                                    <div className="rating">
                                        {[...Array(Math.floor(product.rating.rate)).keys()].map(n => (
                                            <FontAwesomeIcon icon={faStar} key={n} />
                                        ))}
                                        {[...Array(5 - Math.floor(product.rating.rate)).keys()].map(n => {
                                            return <FontAwesomeIcon icon={faStarHalfAlt} key={n} />
                                        })}
                                    </div>
                                    <p><FontAwesomeIcon icon={faRupeeSign} /> {product.price}</p>
                                </div>
                            ))}
                        </div>)
                    }
                </div>

                {/* Featured Latest End */}

                {/* Offer Start */}

                <div className="offer">
                    <div className="small-container">
                        {productSpinner ?
                            <SpinnerCircular className='spinner' size={200} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
                            : (<div className="row">
                                <div className="col-2">
                                    <img src={exclusiveProduct.image} alt="exclusive" className="offer-img" />
                                </div>
                                <div className="col-2">
                                    <p>Exclusively Available on RedStore</p>
                                    <h1>{exclusiveProduct.title}</h1>
                                    <small>{exclusiveProduct.description}</small>
                                    <div>
                                        <NavLink to="/cart" className="btn" onClick={(e) => { onClickAddToCart(e, exclusiveProduct) }}>Buy Now &#8594;</NavLink>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>


                {/* Offer End */}

                {/* Testimonial Start */}
                <div className="testimonial">
                    <div className="small-container">
                        <div className="row">
                            {quotes.map((item) => (
                                <div className="col-3" key={item.id}>
                                    <FontAwesomeIcon icon={faQuoteLeft} className='fa-quote-left' />
                                    <p>{item.quote}</p>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    </div>
                                    <img src={item.image} alt="user-1" />
                                    <h3>{item.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Testimonial Start */}

                {/* Brands Start */}

                <div className="brands">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-5">
                                <img src={imagePath.logoGodrej} alt="logo-godrej" />
                            </div>
                            <div className="col-5">
                                <img src={imagePath.logoOppo} alt="logo-oppo" />
                            </div>
                            <div className="col-5">
                                <img src={imagePath.logoCocaCola} alt="logo-coca-cola" />
                            </div>
                            <div className="col-5">
                                <img src={imagePath.logoPaypal} alt="logo-paypal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
