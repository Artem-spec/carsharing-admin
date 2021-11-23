import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './selectFilter.module.scss';

const SelectFilter = (props) => {
    const { id, values, handleClick, textLabel } = props;
    const classnames = classnamesBind.bind(styles);

    return (
        values && (
            <div className={classnames('select-filter__wrap-select')}>
                <label
                    className={classnames('select-filter-label')}
                    htmlFor={id}
                >
                    {textLabel}
                </label>
                <select
                    className={classnames(
                        'form-select',
                        'select-filter-select'
                    )}
                    id={id}
                    onClick={(e) => handleClick(e, id)}
                >
                    {values.map((status) => (
                        <option key={status.id} value={status.id}>
                            {status.name}
                        </option>
                    ))}
                </select>
            </div>
        )
    );
};
SelectFilter.propTypes = {
    id: PropTypes.string,
    values: PropTypes.array,
    handleClick: PropTypes.func,
    textLabel: PropTypes.string,
};
export default SelectFilter;
