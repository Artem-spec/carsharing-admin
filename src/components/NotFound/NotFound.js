import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import classnamesBind from 'classnames/bind';
import styles from './notFound.module.scss';

const NotFound = (props) => {
    const { error, message } = props;
    const classnames = classnamesBind.bind(styles);
    const history = useHistory();

    return (
        <div className={classnames('not-found')}>
            <span className={classnames('not-found__error-num')}>{error}</span>
            <span className={classnames('not-found__error-msg')}>
                {message}
            </span>
            <span className={classnames('not-found__recommendations')}>
                Попробуйте перезагрузить страницу
            </span>
            <button
                className={classnames('not-found__btn')}
                onClick={() => {
                    history.goBack();
                }}
            >
                Назад
            </button>
        </div>
    );
};
NotFound.propTypes = {
    error: PropTypes.string,
    message: PropTypes.string,
};
export default NotFound;
