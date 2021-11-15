import React from 'react';
import classnamesBind from 'classnames/bind';
import styles from './main.module.scss';

const Main = () => {
    const classnames = classnamesBind.bind(styles);
    return <div className={classnames('main')}>Основной блок</div>;
};
export default Main;
