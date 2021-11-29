import React from 'react';
import classnamesBind from 'classnames/bind';
import styles from './menu.module.scss';
import MenuItems from './MenuItems/MenuItems';

const Menu = () => {
    const classnames = classnamesBind.bind(styles);

    return (
        <div className={classnames('menu')}>
            <MenuItems />
        </div>
    );
};
export default Menu;
