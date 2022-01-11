import { GET_ALL_PRODUCT, GET_EXCLUSIVE_PRODUCT, GET_FEATURED_PRODUCT, GET_LATEST_PRODUCT, GET_PRODUCT_DESCRIPTION, GET_RELATED_PRODUCTS, PRODUCTS_SPINNER, QUOTES } from './types';

const initialState = {
    productSpinner: true,
    productAllData: [],
    featureProductData: [],
    latestProductData: [],
    exclusiveProduct: [],
    productDescData: [],
    relatedProducts: [],
    quotes: [],
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCTS_SPINNER:
            return {
                ...state,
                productSpinner: payload
            };
        case GET_ALL_PRODUCT:
            return {
                ...state,
                productAllData: payload
            }
        case GET_FEATURED_PRODUCT:
            return {
                ...state,
                featureProductData: payload
            }
        case GET_LATEST_PRODUCT:
            return {
                ...state,
                latestProductData: payload
            }
        case GET_EXCLUSIVE_PRODUCT:
            return {
                ...state,
                exclusiveProduct: payload
            }
        case GET_PRODUCT_DESCRIPTION:
            return {
                ...state,
                productDescData: payload
            }
        case GET_RELATED_PRODUCTS:
            return {
                ...state,
                relatedProducts: payload
            }
        case QUOTES:
            return {
                ...state,
                quotes: payload
            }
        default:
            return state;
    }
}

export default productReducer;