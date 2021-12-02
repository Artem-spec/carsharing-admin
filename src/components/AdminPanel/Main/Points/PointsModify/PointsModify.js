import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import classnamesBind from 'classnames/bind';
import styles from './pointsModify.module.scss';
import {
  getDataFilter,
  insertItem,
  updateItem,
} from '../../../../../utils/getDataAPI';
import HeaderModifyWindow from '../../HeaderModifyWindow/HeaderModifyWindow';
import InputFormik from '../../InputFormik/InputFormik';
import SelectFormik from '../../SelectFormik/SelectFormik';

const PointsModify = (props) => {
  const classnames = classnamesBind.bind(styles);

  const { item, active, setActive, setNewPagination } = props;
  const [initialValues, setInitialValues] = useState({
    name: '',
    cityId: '',
    address: '',
  });
  const [city, setCity] = useState(null);

  const validationPoints = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    cityId: yup.string().required('Обязательное поле'),
    address: yup.string().required('Обязательное поле'),
  });

  useEffect(() => {
    const getCity = async () => {
      const resultCity = await getDataFilter('/city');
      setCity(resultCity);
    };
    getCity();
  }, []);

  useEffect(() => {
    if (item) {
      setInitialValues({
        name: item.name,
        cityId: item.cityId.id,
        address: item.address,
      });
    } else {
      setInitialValues({
        name: '',
        cityId: '',
        address: '',
      });
    }
  }, [item]);

  const handleClickBtn = (values) => {
    if (item) {
      updateItem(item.id, values, 'point', setNewPagination, setActive);
    } else {
      insertItem(values, 'point', setNewPagination, setActive);
    }
  };
  return (
    <div
      className={classnames('points-modify', {
        'points-modify-active': active,
      })}
    >
      <div className={classnames('points-modify__content')}>
        <HeaderModifyWindow
          heading={!item ? 'Создание' : 'Редактирование'}
          setActiveWindow={setActive}
        />
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationPoints}
          onSubmit={handleClickBtn}
        >
          {({ errors }) => (
            <Form>
              <div className={classnames('points-modify__group-input')}>
                <InputFormik
                  id="address"
                  type="text"
                  textLabel="Адрес:"
                  error={errors}
                />
              </div>
              <div className={classnames('points-modify__group-input')}>
                {city && (
                  <>
                    <SelectFormik
                      id="cityId"
                      values={city}
                      textLabel="Город"
                      error={errors}
                    />
                  </>
                )}
              </div>
              <div className={classnames('points-modify__group-input')}>
                <InputFormik
                  id="name"
                  type="text"
                  textLabel="Описание:"
                  error={errors}
                />
              </div>
              <div className={classnames('points-modify__btn-wrap')}>
                <button
                  type="submit"
                  className={classnames('points-modify__btn')}
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
PointsModify.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  setNewPagination: PropTypes.func,
};
export default PointsModify;
