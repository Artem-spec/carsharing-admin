import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classnamesBind from 'classnames/bind';
import styles from './formAuthorization.module.scss';
import { changeAuthorization } from '../../../store/actions/actionAuthorization';
import axiosConfigAuth from '../../../utils/axiosConfigAuth';
import { setToken } from '../../../utils/sessionToken';
import { useHistory } from 'react-router';

const FormAuthorization = () => {
    const classnames = classnamesBind.bind(styles);
    const dispatch = useDispatch();
    // const [login, setLogin] = useState('intern');
    // const [pass, setPass] = useState('intern-S!');
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory();

    // ---------------------------------------------------------------
    //  Обработка отправки формы
    // ---------------------------------------------------------------
    const handleClickBtnForm = (e) => {
        e.preventDefault();
        const post = async () => {
            const response = await axiosConfigAuth
                .post('/auth/login', {
                    username: login,
                    password: pass,
                })
                .then((res) => res.data)
                .catch(() => setError(true));
            if (typeof response === 'object') {
                dispatch(
                    changeAuthorization({
                        auth_success: response.refrash_token,
                        auth_error: false,
                    })
                );
                setToken(response.access_token);
                history.push('/panel');
            }

            return response;
        };
        post();
    };
    // ---------------------------------------------------------------
    //  Событие изменения input
    // ---------------------------------------------------------------
    const handleChangeInput = (e, setValue) => {
        setValue(e.target.value);
    };
    return (
        <form
            className={classnames('form-authorization')}
            onSubmit={handleClickBtnForm}
        >
            <h3 className={classnames('heading-form')}>Вход</h3>
            <label className={classnames('form-label')} htmlFor="login">
                Почта
            </label>
            <input
                className={classnames('form-input')}
                id="login"
                required
                onChange={(e) => handleChangeInput(e, setLogin)}
                // defaultValue={login}
            />
            <label className={classnames('form-label')} htmlFor="password">
                Пароль
            </label>
            <input
                className={classnames('form-input')}
                id="password"
                type="password"
                required
                onChange={(e) => handleChangeInput(e, setPass)}
                // defaultValue={pass}
            />
            <p
                className={classnames('error-msg', {
                    'active-error-msg': error,
                })}
            >
                Проверьте логин и пароль
            </p>
            <div className={classnames('form-wrap-button')}>
                <a href="#" className={classnames('form-link')}>
                    Запросить доступ
                </a>
                <button className={classnames('form-button')} type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};
export default FormAuthorization;
