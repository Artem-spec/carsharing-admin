import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
import ProtectedRoute from './components/Route/ProtectedRoute';
import Authorization from './components/Authorization/Authorization';
import { getToken } from './utils/sessionToken';
import { changeAuthorization } from './store/actions/actionAuthorization';

const App = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const history = useHistory();
    useEffect(() => {
        const token = getToken();
        if (token) {
            dispatch(
                changeAuthorization({ auth_success: token, auth_error: false })
            );
            history.push('/panel');
        }
    }, []);

    return (
        <Router>
            <Switch>
                <PublicRoute exact={true} path="/admin">
                    <Authorization />
                </PublicRoute>
                <PrivateRoute path="/panel" isAuthenticated={auth.auth_error}>
                    <ProtectedRoute />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};
export default App;
