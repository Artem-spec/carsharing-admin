import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './inputForm.module.scss';

const InputForm = (props) => {
    const {
        id,
        type,
        value,
        dataPost,
        setDataPost,
        textLabel,
        required,
        error,
    } = props;
    const classnames = classnamesBind.bind(styles);

    const handleChangeInput = (e, key) => {
        setDataPost({
            ...dataPost,
            [key]: e.target.value,
        });
    };

    return (
        <>
            <label htmlFor={id} className={classnames('input-form__label')}>
                {textLabel}
            </label>

            <input
                type={type}
                id={id}
                className={classnames('form-control', {
                    'input-form__input-required': !value && required,
                    'input-form__input-error': error,
                })}
                onChange={(e) => handleChangeInput(e, id)}
                value={value}
            />
        </>
    );
};
InputForm.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    dataPost: PropTypes.object,
    setDataPost: PropTypes.func,
    textLabel: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.bool,
};
export default InputForm;
