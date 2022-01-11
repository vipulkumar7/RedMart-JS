import axios from 'axios';

// export const base_url = process.env.REACT_APP_API_URL;
// export const insta_key = process.env.REACT_APP_INSTA_KEY;
// export const intercom_name = process.env.INTERCOM_NAME;
// export const intercom_email = process.env.INTERCOM_EMAIL;
// export const intercom_app_id = process.env.INTERCOM_APP_ID;

export const axiosInstance = axios.create({
    // baseURL: base_url,
    headers: {
        // 'Ocp-Apim-Subscription-Key': process.env.REACT_APP_SUB_KEY
    }
});

axiosInstance.defaults.headers.common.token = localStorage.getItem('token');

axiosInstance.interceptors.response.use((response) => {
    if (response.status === 401) {
        alert("You are not authorized");
    }
    return response;
},
    (error) => {
        // whatever you want to do with the error
        console.log(error.response)
        throw error;
    });

export default axiosInstance;
