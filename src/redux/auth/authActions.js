import { url } from '../../api'
import { AUTH_LOADING, SIGN_IN, SIGN_OUT, SIGN_UP, USER_LOADED } from "./authTypes";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance/axiosInstance";

export const setAuthLoading = (isLoading) => {
    return {
        type: AUTH_LOADING,
        payload: isLoading,
    };
};

export const setSignUp = (data) => {
    return {
        type: SIGN_UP,
        payload: data,
    };
};

export const signUp = (user) => dispatch => {
    dispatch(setAuthLoading(true));
    axiosInstance.post(`${url}/signup`, user)
        .then((token) => {
            localStorage.setItem('token', token.data);
            dispatch({
                type: SIGN_UP,
                token: token.data,
            });
            // dispatch(setSignUp(token.data));
            dispatch(setAuthLoading(false));
        })
        .catch((error) => {
            console.log(error.response);
            dispatch(setAuthLoading(false));
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        });
}

export const setSignIn = (data) => {
    return {
        type: SIGN_IN,
        payload: data,
    };
};

export const signIn = (email, password) => dispatch => {
    dispatch(setAuthLoading(true));
    axiosInstance.post(`${url}/signin`, { email, password })
        .then((token) => {
            localStorage.setItem("token", token.data);
            dispatch({
                type: SIGN_IN,
                token: token.data,
            });
            // dispatch(setSignIn(token.data));
            dispatch(setAuthLoading(false));
        })
        .catch((error) => {
            console.log(error.response);
            dispatch(setAuthLoading(false));
            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        });
};


export const signOut = () => dispatch => {
    // dispatch({
    //     type: "CLEAR_TODOS",
    // });
    dispatch({
        type: SIGN_OUT,
    });
};

export const loadUser = () => (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
        dispatch({
            type: USER_LOADED,
            token,
        });
    } else return null;
};