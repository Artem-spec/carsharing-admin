import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './buttonDelete.module.scss';
import { deleteData } from '../../../../../utils/getDataAPI';

const ButtonDelete = (props) => {
  const { path, item, setNewPagination } = props;
  const classnames = classnamesBind.bind(styles);
  const handleClickBtnDelete = () => {
    deleteData(path, item.id, setNewPagination);
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
