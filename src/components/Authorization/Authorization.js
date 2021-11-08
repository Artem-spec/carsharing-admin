import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classnamesBind from 'classnames/bind';
import styles from './authorization.module.scss';
import Logo from '../Logo/Logo';
import FormAuthorization from './FormAuthorization/FormAuthorization';
import { useHistory } from 'react-router';

const LOGO_WIDTH = 45;
const LOGO_HEIGHT = 45;

const Authorization = () => {
    const { auth } = useSelector((state) => state);
    const classnames = classnamesBind.bind(styles);
    const history = useHistory();
    useEffect(() => {
        if (!auth.auth_error) {
            history.push('/panel');
        }
    }, [auth]);
    return (
        auth.auth_error && (
            <div className={classnames('wrap-center')}>
                <div className={classnames('header')}>
                    <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
                    <h1
                        className={classnames(
                            'heading-h1',
                            'heading-h1_margin'
                        )}
                    >
                        Need for drive
                    </h1>
                </div>
                <div className={classnames('wrap-form')}>
                    <FormAuthorization />
                </div>
            </div>
        )
    );
};
export default Authorization;
