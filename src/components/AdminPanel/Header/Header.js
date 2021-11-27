import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './header.module.scss';
import { Alert, Arrow, Burger, Logo } from '../../imgSVG/imgSVG';
import userIcon from '../../../image/user-avatar.png';
import ModalMenu from '../ModalMenu/ModalMenu';

const Header = () => {
    const classnames = classnamesBind.bind(styles);
    const [burgerActive, setBurgerActive] = useState(false);
    return (
        <div className={classnames('header')}>
            <div className={classnames('header-logo')}>
                <Burger
                    burgerActive={burgerActive}
                    setBurgerActive={setBurgerActive}
                />
                <Logo width={21} height={21} />
                <h4
                    className={classnames(
                        'header-logo-heading-h4',
                        'header-logo-heading-h4_margin'
                    )}
                >
                    Need for drive
                </h4>
            </div>
            <div className={classnames('header-user-wrap')}>
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
                        <span className={classnames('header-user-arrow')}>
                            <Arrow />
                        </span>
                    </div>
                </div>
            </div>
            <ModalMenu active={burgerActive} setActive={setBurgerActive} />
        </div>
    );
};
export default Header;
