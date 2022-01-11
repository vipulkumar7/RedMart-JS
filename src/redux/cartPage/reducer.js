import { ADD_TO_CART, INCREMENT_CART, REMOVE_FROM_CART, DECREMENT_CART, GET_CART } from "./types";
import { toast } from "react-toastify";

const initialState = {
    cartTableData: [],
    myTotalCount: 0,
    cartData: [],
}

const sumObjectsByKey = (obj1, obj2) => {
    if (obj1.hasOwnProperty('quantity') === obj2.hasOwnProperty('quantity')) {
        let x = obj1.quantity + obj2.quantity
        delete obj1.quantity;
        obj1.quantity = x;
    }
    return obj1;
}

const calculateTotal = (items) => {
    let newItems = [...items];
    return newItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
}

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            toast.success("Added to Cart", {
                position: toast.POSITION.TOP_CENTER,
            });
            let existItem = false;
            const cartItem = [...state.cartTableData.map((item) => {
                if (item.id === payload.id) {
                    existItem = true;
                    return (sumObjectsByKey(item, payload))
                } else {
                    return item;
                }
            })]
            let newItems2 = [...state.cartTableData, payload];
            return {
                ...state,
                cartTableData: existItem ? cartItem : [...state.cartTableData, payload],
                myTotalCount: existItem ? (state.myTotalCount + payload.quantity) : calculateTotal(newItems2)
            }
        case REMOVE_FROM_CART:
            // toast.success("Removed from Cart", {
            //     position: toast.POSITION.TOP_CENTER,
            // });
            return {
                ...state,
                cartTableData: [...state.cartTableData.filter((item) => {
                    return item.id !== payload.cartId;
                })],
                myTotalCount: state.myTotalCount - payload.cartQuantity,
            }
        case INCREMENT_CART:
            toast.success("Quantity increased", {
                position: toast.POSITION.TOP_CENTER,
            });
            let newItems = [...state.cartTableData];
            newItems[payload].quantity++;
            return {
                cartTableData: [...newItems],
                myTotalCount: calculateTotal(newItems)
            }
        case DECREMENT_CART:
            toast.success("Quantity decreased", {
                position: toast.POSITION.TOP_CENTER,
            });
            let newItems1 = [...state.cartTableData];
            if (newItems1[payload].quantity > 1) {
                newItems1[payload].quantity--;
            }
            return {
                cartTableData: [...newItems1],
                myTotalCount: calculateTotal(newItems1)
            };
        case GET_CART:
            return {
                ...state,
                cartData: payload
            }
        default:
            return state;
    }
}

export default cartReducer;