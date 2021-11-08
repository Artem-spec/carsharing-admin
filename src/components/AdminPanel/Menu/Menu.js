import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnamesBind from 'classnames/bind';
import styles from './menu.module.scss';
import menuItems from './utils/MenuItems';

const Menu = (props) => {
    const { active } = props;
    const classnames = classnamesBind.bind(styles);
    return (
        <nav
            className={classnames('menu', {
                active: active,
            })}
        >
            <ul className={classnames('menu-list')}>
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={classnames('menu-item')}
                    >
                        {item.desc}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
Menu.propTypes = {
    active: PropTypes.bool,
};
export default Menu;
