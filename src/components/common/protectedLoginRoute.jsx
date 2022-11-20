import React from "react";
import { Route, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { getLoggedInStatus } from "../../store/users";
import { useAuth } from "../hooks/useAuth";

function ProtectedLoginRoute({ component: Component, children, ...rest }) {
    const { currentUser, isLoading } = useAuth();
    // console.log(currentUser)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!currentUser && !isLoading) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                            }}
                        />
                    );
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
}
// ProtectedRoute.propTypes = {
//     component: PropTypes.func,
//     location: PropTypes.object,
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.node),
//         PropTypes.node
//     ])
// };

export default ProtectedLoginRoute;
