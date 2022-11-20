import React from "react";
import { Route, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { getLoggedInStatus } from "../../store/users";
import { useAuth } from "../hooks/useAuth";

function ProtectedAdminRoute({ component: Component, children, ...rest }) {
    const {isAdmin} = useAuth();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isAdmin) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
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

export default ProtectedAdminRoute;
