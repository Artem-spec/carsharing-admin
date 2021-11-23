import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getToken } from './utils/sessionToken';
import { changeAuthorization } from './store/actions/actionAuthorization';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
import Authorization from './components/Authorization/Authorization';
import AdminPanel from './components/AdminPanel/AdminPanel';

const App = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const history = useHistory();
    useEffect(() => {
        const token = getToken();
        if (token) {
            dispatch(changeAuthorization());
            history.push('/panel');
        } else {
            history.push('/admin');
        }
    }, []);

    return (
        <Router>
            <Switch>
                <PublicRoute path="/admin">
                    <Authorization />
                </PublicRoute>
                <PrivateRoute path="/panel" isAuthenticated={auth.auth_error}>
                    <AdminPanel />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};
export default App;
