// import axiosInstance from "../../axiosInstance/axiosInstance";
import { ADD_TO_CART, DECREMENT_CART, INCREMENT_CART, REMOVE_FROM_CART } from "./types";

export const setAddToCart = (productDescData) => {
    return {
        type: ADD_TO_CART,
        payload: productDescData,
    };
};

export const addtoCart = (productDescData) => dispatch => {
    dispatch(setAddToCart(productDescData));
}

export const setRemoveFromCart = ({ cartId, cartQuantity }) => {
    return {
        type: REMOVE_FROM_CART,
        payload: { cartId, cartQuantity },
    };
};

export const removeFromCart = (cartId, cartQuantity) => dispatch => {
    // axiosInstance.delete(`http://localhost:5050/cart/${cartId}`)
    //     .then(res => {
    //         // console.log(res.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         // dispatch(setProductsSpinner(false));
    //     });
    dispatch(setRemoveFromCart({ cartId, cartQuantity }));
}

export const setAddQuantity = (index) => {
    return {
        type: INCREMENT_CART,
        payload: index,
    };
};

export const addQuantity = (index) => dispatch => {
    dispatch(setAddQuantity(index));
}

export const setSubQuantity = (index) => {
    return {
        type: DECREMENT_CART,
        payload: index,
    };
};

export const subQuantity = (index) => dispatch => {
    dispatch(setSubQuantity(index));
}




// export const setCartPost = (productDescData) => {
//     return {
//         type: CART_POST,
//         payload: productDescData,
//     };
// };

// export const cartPost = (productDescData) => dispatch => {
//     axiosInstance.post(`http://localhost:5050/cart`, productDescData)
//     // dispatch(setCartPost(productDescData));
// }


// export const setGetCart = (productDescData) => {
//     return {
//         type: GET_CART,
//         payload: productDescData,
//     };
// };

// export const getCart = () => dispatch => {
//     axiosInstance.get(`http://localhost:5050/cart`)
//         .then(response => {
//             dispatch(setGetCart(response.data));
//         })
//         .catch((error) => {
//             console.log(error);
//             // dispatch(setProductsSpinner(false));
//         });
// }