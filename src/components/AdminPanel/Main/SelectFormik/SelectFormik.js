import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './selectFormik.module.scss';
import { ErrorMessage, Field } from 'formik';

const SelectFormik = (props) => {
    const { id, values, textLabel, error } = props;
    const classnames = classnamesBind.bind(styles);

    return (
        values && (
            <>
                <label
                    htmlFor={id}
                    className={classnames('select-form__label')}
                >
                    {textLabel}
                </label>
                <Field
                    as="select"
                    name={id}
                    className={classnames('form-control', {
                        'is-invalid': error[id],
                    })}
                >
                    <option value="">Выберите значение</option>
                    {values.map((value) => (
                        <option key={value.id} value={value.id}>
                            {value.name}
                        </option>
                    ))}
                </Field>
                <ErrorMessage
                    component="div"
                    name={id}
                    className={classnames('invalid-feedback')}
                />
            </>
        )
    );
};
SelectFormik.propTypes = {
    id: PropTypes.string,
    values: PropTypes.any,
    textLabel: PropTypes.string,
    error: PropTypes.any,
};
export default SelectFormik;
