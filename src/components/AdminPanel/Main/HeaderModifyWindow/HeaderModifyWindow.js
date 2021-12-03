import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './headerModifyWindow.module.scss';
import { Cross } from '../../../imgSVG/imgSVG';

const HeaderModifyWindow = (props) => {
    const { heading, setActiveWindow } = props;
    const classnames = classnamesBind.bind(styles);
    return (
        <div className={classnames('header-modify')}>
            <h3 className={classnames('header-modify__heading-h3')}>
                {heading}
            </h3>
            <span className={classnames('header-modify__close')}>
                <Cross handleClick={() => setActiveWindow(false)} />
            </span>
        </div>
    );
};
HeaderModifyWindow.propTypes = {
    heading: PropTypes.string,
    setActiveWindow: PropTypes.func,
};
export default HeaderModifyWindow;
