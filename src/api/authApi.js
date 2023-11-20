import axiosClient from "./axiosClient";

const authApi = {
    signIn: (params) => {
        const url = '/users/signin';
        return axiosClient.post(url, params);        
    },
    signUp: (params) => {
        const url = '/users/signup';
        return axiosClient.post(url, params);        
    },
    // signOut: () => {
    //     const url = '/users/sign-out';
    //     return axiosClient.post(url);
    // }
}

export default authApi;