import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = (props) => {
    const { children, ...rest } = props;
    return <Route {...rest} exact render={() => children} />;
};
PublicRoute.propTypes = {
    children: PropTypes.any,
};
export default PublicRoute;
