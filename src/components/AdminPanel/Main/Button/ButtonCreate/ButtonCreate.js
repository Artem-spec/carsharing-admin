import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './buttonCreate.module.scss';

const ButtonCreate = (props) => {
    const classnames = classnamesBind.bind(styles);
    const { setUpdateItem, setActiveCreate } = props;
    return (
        <>
            <button
                className={classnames('btn-create')}
                onClick={() => {
                    setActiveCreate(true);
                    setUpdateItem(null);
                }}
            >
                Создать
            </button>
        </>
    );
};
ButtonCreate.propTypes = {
    setUpdateItem: PropTypes.func,
    setActiveCreate: PropTypes.func,
};
export default ButtonCreate;
