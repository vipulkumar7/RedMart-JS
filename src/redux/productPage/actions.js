import axiosInstance from "../../axiosInstance/axiosInstance";
import { GET_ALL_PRODUCT, GET_EXCLUSIVE_PRODUCT, GET_FEATURED_PRODUCT, GET_LATEST_PRODUCT, GET_PRODUCT_DESCRIPTION, PRODUCTS_SPINNER } from "./types";

export const setProductsSpinner = (isSpin) => {
    return {
        type: PRODUCTS_SPINNER,
        payload: isSpin
    };
};

export const setAllProduct = (data) => {
    return {
        type: GET_ALL_PRODUCT,
        payload: data,
    };
};

export const getAllProduct = () => dispatch => {
    dispatch(setProductsSpinner(true));
    axiosInstance.get(`https://fakestoreapi.com/products`)
        .then(response => {
            console.log(response, 'response');
            dispatch(setAllProduct(response.data));
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}

export const setFeaturedProduct = (data) => {
    return {
        type: GET_FEATURED_PRODUCT,
        payload: data,
    };
};

export const getFeaturedProduct = () => dispatch => {
    dispatch(setProductsSpinner(true));
    axiosInstance.get(`https://fakestoreapi.com/products?limit=4`)
        .then(response => {
            dispatch(setFeaturedProduct(response.data))
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}

export const setLatestProduct = (data) => {
    return {
        type: GET_LATEST_PRODUCT,
        payload: data,
    };
};

export const getLatestProduct = () => dispatch => {
    dispatch(setProductsSpinner(true));
    axiosInstance.get(`https://fakestoreapi.com/products?limit=8`)
        .then(response => {
            dispatch(setLatestProduct(response.data));
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}

export const setExclusiveProduct = (data) => {
    return {
        type: GET_EXCLUSIVE_PRODUCT,
        payload: data,
    };
};

export const getExclusiveProduct = () => dispatch => {
    dispatch(setProductsSpinner(true));
    axiosInstance.get(`https://fakestoreapi.com/products/16`)
        .then(response => {
            dispatch(setExclusiveProduct(response.data));
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}

export const setProductDescription = (data) => {
    return {
        type: GET_PRODUCT_DESCRIPTION,
        payload: data,
    };
};

export const getProductDescription = (id) => dispatch => {
    dispatch(setProductsSpinner(true));
    axiosInstance.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            dispatch(setProductDescription(response.data));
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}