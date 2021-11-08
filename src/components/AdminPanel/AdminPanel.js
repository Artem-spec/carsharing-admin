import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './adminPanel.module.scss';
import userIcon from '../../image/user-avatar.png';
import Logo from '../Logo/Logo';
import { Alert, Search } from '../imgSVG';
import Menu from './Menu/Menu';

const AdminPanel = () => {
    const classnames = classnamesBind.bind(styles);
    const [burgerActive, setBurgerActive] = useState(false);
    return (
        <div className={classnames('wrap')}>
            <div className={classnames('menu')}>
                <div className={classnames('menu-logo')}>
                    <svg
                        className={classnames('burger', {
                            'burger-active': burgerActive,
                        })}
                        height="20px"
                        viewBox="0 0 24 24"
                        width="20px"
                        onClick={() => setBurgerActive(!burgerActive)}
                    >
                        <g id="Icon">
                            <path d="M4,6.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                            <path d="M4,12.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                            <path d="M4,18.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                        </g>
                    </svg>
                    <Logo width={21} height={21} />
                    <h4
                        className={classnames(
                            'menu-logo-heading-h4',
                            'menu-logo-heading-h4_margin'
                        )}
                    >
                        Need for drive
                    </h4>
                </div>
                <Menu active={burgerActive} />
            </div>

            <div className={classnames('content')}>
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
                            <svg
                                width="9"
                                height="5"
                                viewBox="0 0 9 5"
                                fill="none"
                            >
                                <path
                                    d="M0 0.5L4.25 5L8.5 0.5H0Z"
                                    fill="#ABB6BF"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={classnames('wrap-main-footer')}>
                    <div className={classnames('main')}>Основной блок</div>
                    <div className={classnames('footer')}>
                        <a href="#" className={classnames('footer-link')}>
                            Главная страница
                        </a>
                        <span className={classnames('footer-copyright')}>
                            Copyright © 2020 Simbirsoft
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminPanel;
