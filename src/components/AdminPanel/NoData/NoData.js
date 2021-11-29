import React from 'react';
import classnamesBind from 'classnames/bind';
import styles from './noData.module.scss';

const NoData = () => {
    const classnames = classnamesBind.bind(styles);
    return <h3 className={classnames('no-data__heading')}>Нет данных</h3>;
};
export default NoData;
