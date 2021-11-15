import React from 'react';
import classnamesBind from 'classnames/bind';
import styles from './footer.module.scss';

const Footer = () => {
    const classnames = classnamesBind.bind(styles);
    return (
        <div className={classnames('footer')}>
            <a href="#" className={classnames('footer-link')}>
                Главная страница
            </a>
            <span className={classnames('footer-copyright')}>
                Copyright © 2020 Simbirsoft
            </span>
        </div>
    );
};
export default Footer;
