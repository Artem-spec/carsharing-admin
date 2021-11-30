import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classnamesBind from 'classnames/bind';
import styles from './buttonDelete.module.scss';
import axiosConfig from '../../../../../utils/axiosConfig';

const ButtonDelete = (props) => {
    const { path, item, setNewPagination } = props;
    const classnames = classnamesBind.bind(styles);
    const { auth } = useSelector((state) => state);
    const handleClickBtnDelete = () => {
        axiosConfig.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${auth.auth_success}`;
        const deleteItem = async () => {
            await axiosConfig.delete(`/${path}/${item.id}`).then(() => {
                setNewPagination(true);
            });
        };
        deleteItem();
    };
    return (
        <>
            <button
                className={classnames('btn-delete')}
                onClick={handleClickBtnDelete}
            >
                Удалить
            </button>
        </>
    );
};
ButtonDelete.propTypes = {
    path: PropTypes.string,
    item: PropTypes.object,
    setNewPagination: PropTypes.func,
};
export default ButtonDelete;
