import React from 'react';
import classnamesBind from 'classnames/bind';
import styles from './header.module.scss';
import { Search, Alert, Arrow } from '../../imgSVG/imgSVG';
import userIcon from '../../../image/user-avatar.png';

const Header = () => {
    const classnames = classnamesBind.bind(styles);
    return (
        <div className={classnames('header')}>
            <div className={classnames('header-search')}>
                <Search />
                <input
                    className={classnames('header-search-input')}
                    type="search"
                    placeholder="Поиск..."
                />
            </div>
            <div className={classnames('header-wrap-alert-user')}>
                <div className={classnames('header-alert')}>
                    <Alert />
                </div>
                <div className={classnames('header-user')}>
                    <img
                        className={classnames('header-user-icon')}
                        alt=""
                        src={userIcon}
                    />
                    <span className={classnames('header-user-name')}>
                        Admin
                    </span>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};
export default Header;
