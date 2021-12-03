import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './buttonUpdate.module.scss';

const ButtonUpdate = (props) => {
    const { setUpdateItem, setActiveCreate, item } = props;
    const classnames = classnamesBind.bind(styles);
    return (
        <button
            className={classnames('btn-update')}
            onClick={() => {
                setUpdateItem(item);
                setActiveCreate(true);
            }}
        >
            Изменить
        </button>
    );
};
ButtonUpdate.propTypes = {
    setUpdateItem: PropTypes.func,
    setActiveCreate: PropTypes.func,
    item: PropTypes.object,
};
export default ButtonUpdate;
