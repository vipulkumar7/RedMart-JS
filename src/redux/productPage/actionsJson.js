import axiosInstance from "../../axiosInstance/axiosInstance";
import { GET_ALL_PRODUCT, GET_EXCLUSIVE_PRODUCT, GET_FEATURED_PRODUCT, GET_LATEST_PRODUCT, GET_PRODUCT_DESCRIPTION, GET_RELATED_PRODUCTS, PRODUCTS_SPINNER, QUOTES } from "./types";

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
    axiosInstance.get(`http://localhost:5050/products`)
        .then(response => {
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
    axiosInstance.get(`http://localhost:5050/products?_start=21&_limit=4`)
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
    axiosInstance.get(`http://localhost:5050/products?_start=25&_limit=8`)
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
    axiosInstance.get(`http://localhost:5050/products/25`)
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
    axiosInstance.get(`http://localhost:5050/products/${id}`)
        .then(response => {
            dispatch(setProductDescription(response.data));
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}

export const setRelatedProducts = (data) => {
    return {
        type: GET_RELATED_PRODUCTS,
        payload: data,
    };
};

export const getRelatedProducts = () => dispatch => {
    dispatch(setProductsSpinner(true));
    axiosInstance.get(`http://localhost:5050/products?_start=9&_limit=4`)
        .then(response => {
            dispatch(setRelatedProducts(response.data));
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}

export const setQuotes = (data) => {
    return {
        type: QUOTES,
        payload: data,
    };
};

export const getQuotes = () => dispatch => {
    dispatch(setProductsSpinner(true));
    axiosInstance.get(`http://localhost:5050/quotes`)
        .then(response => {
            dispatch(setQuotes(response.data));
            dispatch(setProductsSpinner(false));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setProductsSpinner(false));
        });
}