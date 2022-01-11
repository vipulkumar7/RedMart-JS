import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { useDocumentTitle } from './setDocumentTitle';
import { faMinusCircle, faPlusCircle, faRupeeSign, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { removeFromCart, addQuantity, subQuantity } from '../redux/cartPage/actions';

const Cart = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const cartTableData = useSelector(state => state.cartReducer.cartTableData);
    const myTotalCount = useSelector(state => state.cartReducer.myTotalCount);
    useDocumentTitle('Cart');

    const SubTotal = cartTableData.reduce((acc, curr) => acc + (curr.price) * (curr.quantity), 0);
    const tax = SubTotal * .1;
    const total = SubTotal * 1.1;

    const onClickRemoveFromCart = (cart) => {
        swal('Are you sure you want to remove this item?', {
            buttons: ["Cancel", "Remove"],
        }).then(function (isConfirm) {
            if (isConfirm) {
                swal({
                    title: 'Remove Item',
                    text: `Successfully removed ${cart.title} from your cart`,
                    icon: 'success'
                })
                dispatch(removeFromCart(cart.id, cart.quantity));
                if (myTotalCount === 0) history.push('/products');
            }
        })
    }

    const handleAddQuantity = (index) => {
        dispatch(addQuantity(index))
    }

    const handleSubQuantity = (index) => {
        dispatch(subQuantity(index))
    }

    return (
        <div id="page-container">
            <Header />
            {cartTableData.length !== 0 && cartTableData ? (
                <div className="small-container cart-page" id="content-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartTableData.map((cart, index) => (
                                <tr key={cart.id}>
                                    <td>
                                        <div className="cart-info">
                                            <img src={cart.image} alt="buy-1" />
                                            <div>
                                                <h3 className='brandName'>{cart.brand}</h3>
                                                <p>{cart.title}</p>
                                                <small>Price: <FontAwesomeIcon icon={faRupeeSign} /> {cart.price}</small>
                                                <small className='sizein-cart'>{' '} Size: {cart.size}</small>
                                                <br />
                                                <span className='btn-remove cursor' onClick={() => { onClickRemoveFromCart(cart) }}>
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='cart-quantity'>
                                        <span
                                            className={cart.quantity > 1 ? 'cart-btn cursor' : 'cart-btn cursor disable-decrement-cart'}
                                            onClick={() => { handleSubQuantity(index) }}
                                        >
                                            <FontAwesomeIcon icon={faMinusCircle} />
                                        </span>
                                        <span>{cart.quantity} </span>
                                        <span
                                            className={cart.quantity < 10 ? 'cart-btn cursor' : 'cart-btn cursor disable-decrement-cart'}
                                            onClick={() => { handleAddQuantity(index) }}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} />
                                        </span>
                                    </td>
                                    <td><FontAwesomeIcon icon={faRupeeSign} /> {(Math.round(cart.quantity * cart.price * 100) / 100).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="total-price">
                            <tr>
                                <td />
                                <td>Subtotal</td>
                                <td><FontAwesomeIcon icon={faRupeeSign} /> {(Math.round(SubTotal * 100) / 100).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td />
                                <td>Tax</td>
                                <td><FontAwesomeIcon icon={faRupeeSign} /> {(Math.round(tax * 100) / 100).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td />
                                <td>Total</td>
                                <td><FontAwesomeIcon icon={faRupeeSign} /> {(Math.round(total * 100) / 100).toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            ) : (
                <div>
                    <h1 className='empty-cart'> Cart is Empty </h1>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Cart;
