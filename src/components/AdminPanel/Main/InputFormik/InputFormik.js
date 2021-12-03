import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import classnamesBind from 'classnames/bind';
import styles from './inputFormik.module.scss';

const InputFormik = (props) => {
  const { id, type, error, textLabel } = props;
  const classnames = classnamesBind.bind(styles);

  return (
    <>
      <label htmlFor={id} className={classnames('input-form__label')}>
        {textLabel}
      </label>
      <Field
        type={type}
        id={id}
        name={id}
        className={classnames('form-control', {
          'is-invalid': error[id],
        })}
      />
      <ErrorMessage
        component="div"
        name={id}
        className={classnames('invalid-feedback')}
      />
    </>
  );
};
InputFormik.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  textLabel: PropTypes.string,
  error: PropTypes.any,
};
export default InputFormik;
