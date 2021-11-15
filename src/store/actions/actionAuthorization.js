import axiosConfigAuth from '../../utils/axiosConfigAuth';
import { getToken, setToken } from '../../utils/sessionToken';

export const AUTHORIZATION = 'AUTHORIZATION';

export const changeAuthorization = (login, pass, setError, history) => {
    const token = getToken();
    return (dispatch) => {
        if (!token) {
            const post = async () => {
                await axiosConfigAuth
                    .post('/auth/login', {
                        username: login,
                        password: pass,
                    })
                    .then((res) => {
                        dispatch({
                            type: AUTHORIZATION,
                            payload: {
                                auth_success: res.data.refresh_token,
                                auth_error: false,
                            },
                        });
                        setToken(res.data.refresh_token);
                        history.push('/panel');
                    })
                    .catch(() => setError(true));
            };
            post();
        } else {
            dispatch({
                type: AUTHORIZATION,
                payload: {
                    auth_success: token,
                    auth_error: false,
                },
            });
        }
    };
};
