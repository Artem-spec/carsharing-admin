import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classnamesBind from 'classnames/bind';
import styles from './buttonDelete.module.scss';
import { deleteData } from '../../../../../utils/getDataAPI';

const ButtonDelete = (props) => {
  const { path, item, setNewPagination } = props;
  const classnames = classnamesBind.bind(styles);
  const { auth } = useSelector((state) => state);
  const handleClickBtnDelete = () => {
    deleteData(auth.auth_success, path, item.id, setNewPagination);
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
