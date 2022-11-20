import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
// import axios from "axios";
import userService from "../services/user.service";
import localStorageService, { setTokens } from "../services/localStorage.service"
import { useHistory } from "react-router-dom";
import { authService } from "../services/auth.service";

// export const httpAuth = axios.create({
//     baseURL: "https://identitytoolkit.googleapis.com/v1/",
//     params: {
//         key: process.env.REACT_APP_FIREBASE_KEY
//     }
// });
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children, reference }) => {
    const [currentUser, setUser] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const isLoggedIn = Boolean(currentUser)
    let isAdmin
    if (currentUser) {
        isAdmin = currentUser.isAdmin
    }
    // useEffect(() => {
    //     console.log(currentUser)
    // },[currentUser])
    const history = useHistory();
    async function logIn({ email, password }) {
        try {
            const data = await authService.logIn({email,
                password,
                returnSecureToken: true})
            setTokens(data);
            await getUserData();
            setLoading(false)
            reference.current.click()
        } catch (error) {
            // errorCatcher(error);
            const { code, message } = error.response.data.error;
            console.log(code, message);
            if (code === 400) {
                switch (message) {
                    case "INVALID_PASSWORD":
                        setError("Email или пароль введены некорректно");
                        break
                    case "EMAIL_NOT_FOUND":
                        setError("Email или пароль введены некорректно");
                        break
                    default:
                        setError(
                            "Слишком много попыток входа. Попробуйте позже"
                        );
                        break
                }
            }
        }
    }
    // useEffect(() => {
    //     console.log(error)
    // }, [error])
    function logOut() {
        localStorageService.removeAuthData();
        setUser(null);
        history.push("/");
    }
    async function updateUserData(data) {
        try {
            const { content } = await userService.update(data);
            setUser(content);
        } catch (error) {
            errorCatcher(error);
        }
    }
    async function signUp({ email, password, ...rest }) {
        try {
            const data = await authService.register({ email, password })
            setTokens(data);
            await createUser({
                _id: data.localId,
                email,
                bought: 0,
                shoppingCart: [""],
                viewed: [""],
                orders: [""],
                isAdmin: false,
                ...rest
            });
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            console.log(code, message);
            if (code === 400) {
                if (message === "EMAIL_EXISTS") {
                    const errorObject = {
                        email: "Пользователь с таким Email уже существует"
                    };
                    throw errorObject;
                }
            }
        }
    }
    async function createUser(data) {
        try {
            const { content } = await userService.create(data);
            console.log(content);
            setUser(content);
            setLoading(false)
        } catch (error) {
            errorCatcher(error);
        }
    }
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    async function getUserData() {
        try {
            const { content } = await userService.getCurrentUser();
            setUser(content);
        } catch (error) {
            // console.log(error)
            // errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getUserData();
        } else {
            setLoading(false);
        }
    }, []);
    // useEffect(() => {
    //     if (error !== null) {
    //         toast(error);
    //         setError(null);
    //     }
    // }, [error]);
    return (
        <AuthContext.Provider
            value={{
                signUp, logIn, currentUser, logOut, updateUserData, error, isLoading, isLoggedIn,
                isAdmin
            }}
        >
            {!isLoading ? children : "Loading..."}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AuthProvider;
