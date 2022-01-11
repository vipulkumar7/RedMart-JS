import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import { getAllProduct } from '../redux/productPage/actions';
import { getAllProduct } from '../redux/productPage/actionsJson';
import Footer from './Footer';
import Header from './Header';
import Loader from '../Component/Loader';
import { useDocumentTitle } from './setDocumentTitle';
import ReactPaginate from 'react-paginate';
import '../App.css';


const Products = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useDocumentTitle('Products');
    const productSpinner = useSelector(state => state.productReducer.productSpinner);
    const productAllData = useSelector(state => state.productReducer.productAllData);

    const [pagination, setPagination] = useState({
        data: productAllData.map(value => (({
            id: value.id,
            title: value.title,
            brand: value.brand,
            description: value.description,
            category: value.category,
            image: value.image,
            price: value.price,
            rating: { rate: value.rating.rate, count: value.rating.count },
        }))),
        offset: 0,
        numberPerPage: 8,
        pageCount: 0,
        currentData: []
    });

    useEffect(() => {
        setPagination((prevState) => ({
            ...prevState,
            pageCount: Math.ceil(prevState.data.length / prevState.numberPerPage),
            currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
        }))
    }, [pagination.numberPerPage, pagination.offset]);

    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    const onClickProductDetails = (productID) => {
        history.push(`/product/${productID}`);
    }

    const handleSorting = (e) => {
        if (e.target.value === 'sortByRating') {
            setPagination({ ...pagination, currentData: pagination.currentData.sort((a, b) => (a.rating.rate) - (b.rating.rate)) })
        } else if (e.target.value === 'sortByPrice') {
            setPagination({ ...pagination, currentData: pagination.currentData.sort((a, b) => (a.price) - (b.price)) })
        }
    }

    const handlePageClick = event => {
        const selected = event.selected;
        const offset = selected * pagination.numberPerPage;
        setPagination({ ...pagination, offset })
    }

    return (
        <div id="page-container">
            <Header />
            {productSpinner ? <Loader />
                : <div className="small-container" id="content-wrap">
                    <div className="row row-2">
                        <h2>All Products</h2>
                        <select
                            className='dropdown'
                            defaultValue={'default'}
                            onChange={(e) => { handleSorting(e) }}
                        >
                            <option value="default" disabled>Default Sorting</option>
                            <option value="sortByPrice">Sort by Price</option>
                            <option value="sortByRating">Sort by Rating</option>
                        </select>
                    </div>
                    <div className="row">
                        {pagination.currentData && pagination.currentData.map((product) => (
                            <div
                                className="col-4"
                                key={product.id}
                                onClick={() => { onClickProductDetails(product.id) }}
                            >
                                <img src={product.image} alt="product-1" width='230px' height='300px' />
                                <h3 className='brandName'>{product.brand}</h3>
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
                        ))
                        }
                    </div>
                    <ReactPaginate
                        previousLabel={'← Previous'}
                        nextLabel={'Next →'}
                        breakLabel={'...'}
                        disabledClassName={'disable-decrement-cart'}
                        pageCount={pagination.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
            }
            <Footer />
        </div>
    )
}

export default Products
