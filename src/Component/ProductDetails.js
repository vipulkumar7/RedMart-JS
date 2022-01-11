import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from "react-tooltip";
import { faIndent, faRupeeSign, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { addtoCart } from '../redux/cartPage/actions';
// import { getFeaturedProduct, getProductDescription, } from '../redux/productPage/actions';
import { getProductDescription, getRelatedProducts, } from '../redux/productPage/actionsJson';
import Footer from './Footer';
import Header from './Header';
import { useDocumentTitle } from './setDocumentTitle';
import Loader from './Loader';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams()
    useDocumentTitle('Product Details');
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');

    const productSpinner = useSelector(state => state.productReducer.productSpinner);
    const productDescData = useSelector(state => state.productReducer.productDescData);
    const relatedProducts = useSelector(state => state.productReducer.relatedProducts);

    useEffect(() => {
        dispatch(getProductDescription(id))
        dispatch(getRelatedProducts())
    }, [dispatch, id]);

    const onClickProducts = () => {
        history.push('/products');
    }

    const onClickProductDetails = (productID) => {
        window.scrollTo(0, 0);
        history.push(`/product/${productID}`);
    }

    const onChangeQuantity = (e) => {
        e.preventDefault();
        if (e.target.value > 0 && e.target.value <= 5) {
            setQuantity(Math.floor(e.target.value));
        }
    }

    const onClickAddToCart = (e, productDescData) => {
        productDescData.quantity = quantity;
        productDescData.size = size;
        // !size && _afterShow();
        size && dispatch(addtoCart(productDescData, quantity));
        size && history.push('/cart');
    }


    return (
        <div id="page-container">
            <Header />
            <div id="content-wrap">
                {productSpinner ? <Loader />
                    : (
                        <div className="small-container single-product" >
                            <div className="row">
                                <div className="col-2">
                                    <img src={productDescData.image} alt="gallery-1" id='ProductImg' width="100%" height='100%' />
                                </div>
                                <div className="col-2">
                                    <p>{productDescData.category}</p>
                                    <h1>{productDescData.title}</h1>
                                    <h4>
                                        <FontAwesomeIcon icon={faRupeeSign} />
                                        {productDescData.price}
                                    </h4>
                                    <select
                                        className='dropdown'
                                        defaultValue={'default'}
                                        onChange={(e) => { setSize(e.target.value) }}
                                    >
                                        <option value="default" disabled>Select Size</option>
                                        <option value='Small'>Small</option>
                                        <option value='Medium'>Medium</option>
                                        <option value='Large'>Large</option>
                                        <option value='XL'>XL</option>
                                        <option value='XXL'>XXL</option>
                                    </select>
                                    {/* <ReactTooltip
                                id="selectSize"
                                place="top"
                                effect="solid"
                                globalEventOff={"click"}
                                afterShow={_afterShow}
                            >
                                Please select a Size to proceed
                            </ReactTooltip> */}
                                    <input
                                        type="number"
                                        min='1'
                                        max='5'
                                        value={quantity}
                                        onChange={(e) => onChangeQuantity(e)}
                                    />
                                    <span
                                        className={size ? 'btn cursor' : 'btn opacity'}
                                        onClick={(e) => { onClickAddToCart(e, productDescData) }}
                                        data-tip data-for="selectSize"
                                    >
                                        Add To Cart
                                    </span>
                                    <ReactTooltip
                                        id="selectSize"
                                        place='top'
                                        effect="solid"
                                        globalEventOff={"click"}
                                    // afterShow={_afterShow}
                                    >
                                        {!size && 'Please select a Size to proceed'}
                                    </ReactTooltip>
                                    <h3>Product Details <FontAwesomeIcon icon={faIndent} /></h3>
                                    <br />
                                    <p>{productDescData.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }


                {/*Title */}
                <div className="small-container">
                    <div className="row row-2">
                        <h2>Related Products</h2>
                        <p className='cursor' onClick={onClickProducts}>View more</p>
                    </div>
                </div>

                {/*Products */}
                <div className="small-container" style={{ marginBottom: '40px' }}>
                    {productSpinner ?
                        <SpinnerCircular className='spinner' size={200} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
                        : (<div className="row">
                            {relatedProducts.map((product) => (
                                <div className="col-4"
                                    key={product.id}
                                    onClick={() => { onClickProductDetails(product.id) }}
                                >
                                    <img src={product.image} alt="product-9" width='230px' height='300px' />
                                    <h4>{product.title}</h4>
                                    <div className="rating" >
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
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails;
