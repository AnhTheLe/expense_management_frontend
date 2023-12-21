import authApi from "api/authApi";
import {
    refreshToken,
    removeAxiosAccessToken,
    updateAxiosAccessToken,
} from "api/axiosClient";
import PreferenceKeys from "general/constants/PreferenceKeys";
import ToastHelper from "general/helpers/ToastHelper";
import UserHelper from "general/helpers/UserHelper";
import { async } from "q";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [timeSearch, setTimeSearch] = useState("Recently");

    useEffect(() => {
        refreshToken();
        const checkUserToken = async () => {
            const isLoggedIn = UserHelper.checkToken() && !UserHelper.checkRefreshTokenExpired();
            setLoggedIn(isLoggedIn);
    
            if (isLoggedIn) {
                const currentUsername = UserHelper.getUsername();
                try {
                    const currentUser = await authApi.getCurrentUser(currentUsername);
                    if (currentUser && currentUser.data) {
                        setUser(currentUser.data);
                    }
                } catch (error) {
                    console.error("Error fetching current user:", error);
                    // Xử lý lỗi nếu cần
                }
            }
        };
    
        checkUserToken();
        return () => {
            // Thực hiện các tác vụ cleanup nếu cần
        };
    }, []); 

    const setTimeSearchFunc = (time) => {
        setTimeSearch(time);
    }
    


    const login = async (username, password) => {
        try {
            const response = await authApi.signIn({
                username: username,
                password: password,
            });
            if (response) {
                updateAxiosAccessToken(response.accessToken);
                localStorage.setItem(
                    PreferenceKeys.accessToken,
                    response.accessToken
                );
                localStorage.setItem(
                    PreferenceKeys.refreshToken,
                    response.refreshToken
                );
                setLoggedIn(true);
                ToastHelper.showSuccess("Login success");
                const currentUser = await authApi.getCurrentUser(username);
                if (currentUser) {
                    setUser(currentUser);
                }
            }
        } catch (error) {
            console.log("error", error);
            if (error.data && error.data.message) {
                ToastHelper.showError(error.data.message);
            }
            else { ToastHelper.showError(error.message) };
            removeAxiosAccessToken();
            return;
        }
    };

    const signUp = async (username, password, email, phone) => {
        try {
            const response = await authApi.signUp({
                username: username,
                password: password,
                email: email,
                phone: phone,
            });
            if (response) {
                updateAxiosAccessToken(response.data.accessToken);
                localStorage.setItem(
                    PreferenceKeys.accessToken,
                    response.data.accessToken
                );
                localStorage.setItem(
                    PreferenceKeys.refreshToken,
                    response.data.refreshToken
                );
                setLoggedIn(true);
                ToastHelper.showSuccess("Đăng ký thành công");
            }
        } catch (error) {
            console.log("error", error.response.data.message);
            if (error.response.data?.data[0]?.message) {
                console.log("here")
                ToastHelper.showError(error.response.data.data[0].message);
                return;
            } else {
                ToastHelper.showError(error.response?.data?.message);
                return;
            }

        }
    }

    const logout = () => {
        UserHelper.signOut();
        setLoggedIn(false);
        removeAxiosAccessToken();
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                login,
                logout,
                signUp,
                timeSearch,
                setTimeSearchFunc,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
