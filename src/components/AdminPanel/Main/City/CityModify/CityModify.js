import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './cityModify.module.scss';
import HeaderModifyWindow from '../../HeaderModifyWindow/HeaderModifyWindow';
import InputFormik from '../../InputFormik/InputFormik';
import { insertItem, updateItem } from '../../../../../utils/getDataAPI';

const CityModify = (props) => {
  const classnames = classnamesBind.bind(styles);

  const { item, active, setActive, setNewPagination } = props;
  const [initialValues, setInitialValues] = useState({ name: '' });

  const validationCity = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
  });

  useEffect(() => {
    if (item) {
      setInitialValues({
        name: item.name,
      });
    } else {
      setInitialValues({
        name: '',
      });
    }
  }, [item]);

  const handleClickBtn = (values) => {
    if (item) {
      updateItem(item.id, values, 'city', setNewPagination, setActive);
    } else {
      insertItem(values, 'city', setNewPagination, setActive);
    }
  };
  return (
    <div
      className={classnames('city-modify', {
        'city-modify-active': active,
      })}
    >
      <div className={classnames('city-modify__content')}>
        <HeaderModifyWindow
          heading={!item ? 'Создание' : 'Редактирование'}
          setActiveWindow={setActive}
        />
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationCity}
          onSubmit={handleClickBtn}
        >
          {({ errors }) => (
            <Form>
              <div className={classnames('city-modify__group-input')}>
                <InputFormik
                  id="name"
                  type="text"
                  textLabel="Город:"
                  error={errors}
                />
              </div>
              <div className={classnames('city-modify__btn-wrap')}>
                <button
                  type="submit"
                  className={classnames('city-modify__btn')}
                >
                  Сохранить
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
CityModify.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  setNewPagination: PropTypes.func,
};
export default CityModify;
