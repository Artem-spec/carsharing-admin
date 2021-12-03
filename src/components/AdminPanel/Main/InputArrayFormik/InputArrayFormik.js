import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, FieldArray } from 'formik';
import classnamesBind from 'classnames/bind';
import styles from './inputArrayFormik.module.scss';

const InputArrayFormik = (props) => {
  const { id, textLabel, values } = props;
  const classnames = classnamesBind.bind(styles);

  return (
    <>
      <label htmlFor={id} className={classnames('input-array-formik__label')}>
        {textLabel}
      </label>
      <FieldArray
        name={id}
        render={(arrayHelpers) => (
          <div>
            {values[id] && values[id].length > 0 ? (
              values[id].map((value, index) => (
                <div
                  key={index}
                  className={classnames('input-array-formik__field')}
                >
                  <Field
                    name={`${id}.${index}`}
                    className={classnames('form-control')}
                  />
                  <div
                    className={classnames(
                      'btn-group',
                      'btn-gtoup-sm',
                      'input-array-formik__btn-group'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                      className={classnames('btn', 'btn-success')}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.insert(index, '')}
                      className={classnames('btn', ' btn-danger')}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <button
                type="button"
                className={classnames('input-array-formik__btn-add')}
                onClick={() => arrayHelpers.push('')}
              >
                Добавить цвет
              </button>
            )}
          </div>
        )}
      />
      <ErrorMessage
        component="div"
        name={id}
        className={classnames('invalid-feedback')}
      />
    </>
  );
};
InputArrayFormik.propTypes = {
  id: PropTypes.string,
  values: PropTypes.object,
  textLabel: PropTypes.string,
};
export default InputArrayFormik;
