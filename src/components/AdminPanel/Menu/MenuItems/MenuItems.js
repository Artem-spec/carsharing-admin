import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import classnamesBind from 'classnames/bind';
import styles from './menuItems.module.scss';
import menuItems from './utils/menuItems';

const MenuItems = () => {
  const classnames = classnamesBind.bind(styles);
  const { path } = useRouteMatch();
  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav className={classnames('menu')}>
      <ul className={classnames('menu-list')}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={`${path}${item.path}`}
            className={classnames('menu-item', {
              'menu-item-active': index === activeItem,
            })}
            onClick={() => setActiveItem(index)}
          >
            {item.desc}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItems;
