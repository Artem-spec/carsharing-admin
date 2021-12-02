import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import classnamesBind from 'classnames/bind';
import styles from './carModify.module.scss';
import HeaderModifyWindow from '../../HeaderModifyWindow/HeaderModifyWindow';
import {
  getDataFilter,
  insertItem,
  updateItem,
} from '../../../../../utils/getDataAPI';
import InputFormik from '../../InputFormik/InputFormik';
import SelectFormik from '../../SelectFormik/SelectFormik';
import InputArrayFormik from '../../InputArrayFormik/InputArrayFormik';

const defStateParams = {
  priceMax: 0,
  priceMin: 0,
  name: '',
  thumbnail: null,
  description: '',
  categoryId: '',
  colors: [],
  number: '',
  tank: 0,
};

const CarModify = (props) => {
  const classnames = classnamesBind.bind(styles);

  const { item, active, setActive, setNewPagination } = props;
  const [category, setCategory] = useState(null);
  const [initialValues, setInitialValues] = useState(defStateParams);
  const [thumbnail, setThumbnail] = useState(null);

  const validationCar = yup.object().shape({
    thumbnail: yup.mixed().required('Обязательное поле'),
    name: yup.string().required('Обязательное поле'),
    priceMax: yup
      .number()
      .positive('Не может быть 0')
      .integer()
      .required('Обязательное поле')
      .moreThan(yup.ref('priceMin'), 'Цена от меньше цены до'),
    priceMin: yup
      .number()
      .positive('Не может быть 0')
      .integer()
      .required('Обязательное поле'),
    categoryId: yup.string().required('Обязательное поле'),
  });

  useEffect(() => {
    const getCategory = async () => {
      await getDataFilter('/category').then((res) => setCategory(res));
    };
    getCategory();
  }, []);

  useEffect(() => {
    if (item) {
      setInitialValues({
        ...item,
        thumbnail: {
          ...item.thumbnail,
        },
        categoryId: item.categoryId.id,
      });
    } else {
      setInitialValues({
        ...initialValues,
      });
    }
  }, [item]);

  const handleClickBtn = (values) => {
    const bodyRequest = {
      ...values,
      thumbnail: thumbnail ? thumbnail : item.thumbnail,
    };
    if (item) {
      updateItem(item.id, bodyRequest, 'car', setNewPagination, setActive);
    } else {
      insertItem(bodyRequest, 'car', setNewPagination, setActive);
    }
  };

  const ChangeFile = async (item) => {
    const reader = new FileReader();
    reader.readAsDataURL(item);
    reader.onload = () => {
      setThumbnail({
        mimetype: item.type,
        originalname: item.name,
        path: reader.result,
        size: item.size,
      });
    };
  };

  return (
    <div
      className={classnames('car-modify', {
        'car-modify-active': active,
      })}
    >
      <div className={classnames('car-modify__content')}>
        <HeaderModifyWindow
          heading={!item ? 'Создание' : 'Редактирование'}
          setActiveWindow={setActive}
        />

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationCar}
          onSubmit={handleClickBtn}
        >
          {({ errors, values, setFieldValue }) => (
            <Form>
              <div className={classnames('car-modify__input-wrap')}>
                <div className={classnames('car-modify__input-wrap-left')}>
                  <div className={classnames('car-modify__group-input')}>
                    <InputFormik
                      id="priceMin"
                      type="number"
                      textLabel="Цена от:"
                      error={errors}
                    />
                  </div>
                  <div className={classnames('car-modify__group-input')}>
                    <InputFormik
                      id="priceMax"
                      type="number"
                      textLabel="Цена до:"
                      error={errors}
                    />
                  </div>
                  <div className={classnames('car-modify__group-input')}>
                    <InputFormik
                      id="name"
                      type="text"
                      textLabel="Название:"
                      error={errors}
                    />
                  </div>
                  <div className={classnames('car-modify__group-input')}>
                    <label
                      htmlFor="thumbnail"
                      className={classnames('input-form__label')}
                    >
                      Картинка:
                    </label>
                    <input
                      name="thumbnail"
                      type="file"
                      accept="image/*"
                      className={`mt-2 form-control ${
                        errors.thumbnail ? 'is-invalid' : ''
                      }`}
                      onChange={(e) => {
                        setFieldValue('thumbnail', e.target.files[0]);
                        ChangeFile(e.currentTarget.files[0]);
                      }}
                    />
                    <ErrorMessage
                      component="div"
                      name="thumbnail"
                      className={'invalid-feedback'}
                    />
                  </div>
                  <div className={classnames('car-modify__group-input')}>
                    <InputFormik
                      id="description"
                      type="text"
                      textLabel="Описание:"
                      error={errors}
                    />
                  </div>
                </div>
                <div className={classnames('car-modify__input-wrap-right')}>
                  <div className={classnames('car-modify__group-input')}>
                    <SelectFormik
                      id="categoryId"
                      values={category}
                      textLabel="Категория:"
                      error={errors}
                    />
                  </div>
                  <div className={classnames('car-modify__group-input')}>
                    <InputFormik
                      id="number"
                      type="text"
                      textLabel="Номер:"
                      error={errors}
                    />
                  </div>
                  <div className={classnames('car-modify__group-input')}>
                    <InputFormik
                      id="tank"
                      type="number"
                      textLabel="Бензин:"
                      error={errors}
                    />
                  </div>
                  <div className={classnames('car-modify__group-input')}>
                    <InputArrayFormik
                      id="colors"
                      values={values}
                      textLabel="Цвета:"
                    />
                  </div>
                </div>
              </div>
              <div className={classnames('car-modify__btn-wrap')}>
                <button className={classnames('car-modify__btn')} type="submit">
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
CarModify.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  setNewPagination: PropTypes.func,
};
export default CarModify;
