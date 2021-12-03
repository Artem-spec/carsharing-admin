import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import classnamesBind from 'classnames/bind';
import styles from './modalMenu.module.scss';
import menuItems from '../Menu/MenuItems/utils/menuItems';
import { Cross } from '../../imgSVG/imgSVG';

const ModalMenu = (props) => {

    const { active, setActive } = props;
    const classnames = classnamesBind.bind(styles);
    const { path } = useRouteMatch();

    return (
        <div
            className={classnames('modal-menu', { active })}
            onClick={() => {
                setActive(false);
            }}
        >
            <div
                className={classnames('modal-menu__content')}
                onClick={(e) => e.stopPropagation()}
            >
                <nav className={classnames('modal-menu__nav')}>
                    <ul className={classnames('modal-menu__list')}>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={`${path}${item.path}`}
                                className={classnames('modal-menu__item')}
                                onClick={() => setActive(false)}
                            >
                                {item.desc}
                            </Link>
                        ))}
                    </ul>
                </nav>
                <span className={classnames('modal-menu__close')}>
                    <Cross handleClick={() => setActive(false)} />
                </span>
            </div>
        </div>
    );
};
ModalMenu.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
};
export default ModalMenu;
