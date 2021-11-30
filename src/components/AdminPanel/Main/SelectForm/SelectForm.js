import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './selectForm.module.scss';

const SelectForm = (props) => {
    const { id, values, item, dataPost, setDataPost, textLabel, required } =
        props;
    const classnames = classnamesBind.bind(styles);
    const [itemSelected, setItemSelected] = useState(null);

    useEffect(() => {
        if (item && item[id]) {
            for (const value of values) {
                if (
                    Object.keys(item).includes(id) &&
                    value.id === item[id].id
                ) {
                    setItemSelected(value.id);
                }
            }
        }
    }, [item]);

    const handleChangeISelect = (e, key) => {
        setDataPost({
            ...dataPost,
            [key]: e.target.value,
        });
        setItemSelected(e.target.value);
    };

    return (
        values && (
            <>  <label className={classnames('select-form__label')} htmlFor={id} >
                {textLabel}
            </label>
                <label
                    className={classnames('select-form__label')}
                    htmlFor={id}
                >
                    {textLabel}
                </label>
                <select
                    className={classnames('form-select', {
                        'select-form__input-required':
                            !itemSelected && required,
                    })}
                    onChange={(e) => handleChangeISelect(e, id)}
                    value={itemSelected ? itemSelected : ''}
                >
                    <option value="">Выберите значение</option>
                    {values.map((value) => (
                        <option key={value.id} value={value.id}>
                            {value.name}
                        </option>
                    ))}
                </select>
            </>
        )
    );
};
SelectForm.propTypes = {
    id: PropTypes.string,
    values: PropTypes.any,
    item: PropTypes.object,
    dataPost: PropTypes.object,
    setDataPost: PropTypes.func,
    textLabel: PropTypes.string,
    required: PropTypes.bool,
};
export default SelectForm;
