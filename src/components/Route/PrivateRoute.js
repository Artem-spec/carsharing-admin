import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/admin',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.any,
    isAuthenticated: PropTypes.bool,
};
export default PrivateRoute;
