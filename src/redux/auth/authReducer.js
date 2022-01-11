import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { AUTH_LOADING, SIGN_IN, SIGN_OUT, SIGN_UP } from "./authTypes";

const initialState = {
    token: localStorage.getItem("token"),
    name: null,
    email: null,
    _id: null,
    isLoading: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case SIGN_IN:
        case SIGN_UP:
            toast("Welcome...", {
                position: toast.POSITION.TOP_CENTER,
            });
            const user = jwtDecode(action.token);
            return {
                ...initialState,
                token: action.token,
                name: user.name,
                email: user.email,
                _id: user._id,
            };
        case SIGN_OUT:
            localStorage.removeItem("token");
            toast("Goodbye...", {
                position: toast.POSITION.TOP_CENTER,
            });
            return {
                token: null,
                name: null,
                email: null,
                _id: null,
            };
        default:
            return state;
    }
};

export default authReducer;
