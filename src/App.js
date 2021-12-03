import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getToken } from './utils/sessionToken';
import { changeAuthorization } from './store/actions/actionAuthorization';
import axiosConfig from './utils/axiosConfig';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
import Authorization from './components/Authorization/Authorization';
import AdminPanel from './components/AdminPanel/AdminPanel';
import NotFound from './components/NotFound/NotFound';

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

  useEffect(() => {
    axiosConfig.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${auth.auth_success}`;
  }, [auth]);

  return (
    <Router>
      <Switch>
        <PublicRoute path="/admin">
          <Authorization />
        </PublicRoute>
        <PrivateRoute path="/panel" isAuthenticated={auth.auth_error}>
          <AdminPanel />
        </PrivateRoute>
        <PrivateRoute path="/*" isAuthenticated={auth.auth_error}>
          <NotFound error="404" message="Что-то пошло не так" />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
export default App;
