import React from "react";
import { Route, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// import { getLoggedInStatus } from "../../store/users";
import { getCurrentUser, getLoadingStatus } from "../../store/user";

function ProtectedAdminRoute({ component: Component, children, ...rest }) {
    const currentUser = useSelector(getCurrentUser())
    const isLoading = useSelector(getLoadingStatus())
    return (
        <Route
            {...rest}
            render={(props) => {
                if ((!currentUser && !isLoading) || (!isLoading && !currentUser.isAdmin )) {
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
