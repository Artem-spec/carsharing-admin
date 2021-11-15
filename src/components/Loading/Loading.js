import React from 'react';
import classnamesBind from 'classnames/bind';
import styles from './loading.module.scss';
import '../../castomBootstrap.scss';

const Loading = () => {
    const classnames = classnamesBind.bind(styles);
    return (
        <div className={classnames('loading')}>
            <div className="text-center">
                <div className="spinner-border" role="status"></div>
            </div>
        </div>
    );
};

export default Loading;
