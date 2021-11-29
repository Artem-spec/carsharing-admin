import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classnamesBind from 'classnames/bind';
import styles from './formAuthorization.module.scss';
import { changeAuthorization } from '../../../store/actions/actionAuthorization';
import { useHistory } from 'react-router';

const FormAuthorization = () => {
    const classnames = classnamesBind.bind(styles);
    const dispatch = useDispatch();
    // Оставил чтобы не вбивать снова при выполнении следующего задания
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
        dispatch(changeAuthorization(login, pass, setError, history));
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
