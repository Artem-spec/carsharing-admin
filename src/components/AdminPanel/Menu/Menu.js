import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './menu.module.scss';
import { Burger, Logo } from '../../imgSVG/imgSVG';
import MenuItems from './MenuItems/MenuItems';

const Menu = () => {
    const classnames = classnamesBind.bind(styles);
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <div className={classnames('menu')}>
            <div className={classnames('menu-logo')}>
                <Burger
                    burgerActive={burgerActive}
                    setBurgerActive={setBurgerActive}
                />
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
            <MenuItems active={burgerActive} />
        </div>
    );
};
export default Menu;
