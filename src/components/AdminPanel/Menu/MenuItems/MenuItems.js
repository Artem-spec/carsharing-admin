import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import classnamesBind from 'classnames/bind';
import styles from './menuItems.module.scss';
import menuItems from './utils/menuItems';

const MenuItems = (props) => {
    const { active } = props;
    const classnames = classnamesBind.bind(styles);
    const { path } = useRouteMatch();
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
                        to={`${path}${item.path}`}
                        className={classnames('menu-item')}
                    >
                        {item.desc}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
MenuItems.propTypes = {
    active: PropTypes.bool,
};
export default MenuItems;
