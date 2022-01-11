// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRupeeSign, faSearch, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import Footer from './Footer'
// import Header from './Header'
// import { getAllProduct } from '../redux/productPage/actions';
// import { useDocumentTitle } from './setDocumentTitle';
// import Loader from '../Component/Loader';
// import { RootState } from '../redux/rootReducer';
// import '../App.css';

// const Products: React.FC = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     useDocumentTitle('Products');

//     // const productAllData: ReduxData[] = useSelector((state: RootState) => state.productReducer.productAllData);
//     const productSpinner: boolean = useSelector((state: RootState) => state.productReducer.productSpinner);

//     const items: any = useSelector((state: RootState) => state.productReducer.productAllData);
//     const [currentItems, setCurrentItems] = useState([]);
//     const [pageCount, setPageCount] = useState(0);
//     const [itemOffset, setItemOffset] = useState(0);
//     const [search, setSearch] = useState<string>('')

//     const itemsPerPage = 8;

//     useEffect(() => {
//         const endOffset = itemOffset + itemsPerPage;
//         setCurrentItems(items.slice(itemOffset, endOffset));
//         setPageCount(Math.ceil(items.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage, items]);

//     useEffect(() => {
//         dispatch(getAllProduct());
//     }, [dispatch]);

//     const onClickProductDetails = (productID: number) => {
//         history.push(`/product/${productID}`);
//     }

//     const handlePageClick = (event: any) => {
//         const newOffset = (event.selected * itemsPerPage) % items.length;
//         setItemOffset(newOffset);
//     };

//     const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         // if (e.target.value === 'sortByRating') {
//         //     setPagination({ ...pagination, currentData: pagination.currentData.sort((a, b) => (a.rating.rate) - (b.rating.rate)) })
//         // } else if (e.target.value === 'sortByPrice') {
//         //     setPagination({ ...pagination, currentData: pagination.currentData.sort((a, b) => (a.price) - (b.price)) })
//         // }
//     }

//     const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             // console.log(search, 'search');
//         }
//     }

//     return (
//         <div id="page-container">
//             <Header />
//             {productSpinner ? <Loader />
//                 : <div className="small-container" id="content-wrap">
//                     <div className="row row-2">
//                         <h2>All Products</h2>
//                         <input
//                             className='search'
//                             type='search'
//                             placeholder='Search here'
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             onKeyPress={(e) => { handleKeyPress(e) }}
//                         />
//                         {/* <FontAwesomeIcon icon={faSearch} /> */}
//                         <select
//                             className='dropdown'
//                             defaultValue={'default'}
//                             onChange={(e) => { handleSorting(e) }}
//                         >
//                             <option value="default" disabled>Default Sorting</option>
//                             <option value="sortByPrice">Sort by Price</option>
//                             <option value="sortByRating">Sort by Rating</option>
//                         </select>
//                     </div>
//                     <div className="row">
//                         {currentItems &&
//                             currentItems.map((item: any) => (
//                                 <div
//                                     className="col-4"
//                                     key={item.id}
//                                     onClick={() => { onClickProductDetails(item.id) }}
//                                 >
//                                     <img src={item.image} alt="item-1" width='230px' height='300px' />
//                                     <h3 className='brandName'>{item.brand}</h3>
//                                     <h4>{item.title}</h4>
//                                     <div className="rating">
//                                         {/* {[...Array(Math.floor(item.rating.rate)).keys()].map(n => (
//                                         <FontAwesomeIcon icon={faStar} key={n} />
//                                     ))}
//                                     {[...Array(5 - Math.floor(item.rating.rate)).keys()].map(n => {
//                                         return <FontAwesomeIcon icon={faStarHalfAlt} key={n} />
//                                     })} */}
//                                     </div>
//                                     <p><FontAwesomeIcon icon={faRupeeSign} /> {item.price}</p>
//                                 </div>
//                             ))}
//                     </div>
//                     <ReactPaginate
//                         previousLabel={'← Previous'}
//                         nextLabel={'Next →'}
//                         breakLabel={'...'}
//                         disabledClassName={'disable-decrement-cart'}
//                         pageCount={pageCount}
//                         marginPagesDisplayed={2}
//                         pageRangeDisplayed={5}
//                         onPageChange={handlePageClick}
//                         containerClassName={'pagination'}
//                         activeClassName={'active'}
//                     />
//                 </div>
//             }
//             <Footer />
//         </div>
//     )
// }

// export default Products
