import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './carFilter.module.scss';
import SelectFilter from '../../SelectFilter/SelectFilter';
import { getDataFilter } from '../../../../../utils/getDataAPI';

const CarFilter = (props) => {
    const { filter, setFilter } = props;
    const classnames = classnamesBind.bind(styles);
    const [category, setCategory] = useState(null);
    const [currentOptions, setCurrentOptions] = useState({
        category: '',
    });

    useEffect(() => {
        const getFilter = async () => {
            const resultCategory = await getDataFilter('/category');
            setCategory(resultCategory);
            setCurrentOptions({
                ...currentOptions,
                category: resultCategory[0].id,
            });
            setFilter({
                filterCategory: `categoryId=${resultCategory[0].id}`,
            });
        };
        getFilter();
    }, []);

    const handleClickOprion = (e, key) => {
        switch (key) {
            case 'categoryId':
                if (
                    currentOptions.category &&
                    currentOptions.category !== e.target.value
                ) {
                    setFilter({
                        ...filter,
                        filterCategory: `categoryId=${e.target.value}`,
                    });
                    setCurrentOptions({
                        ...currentOptions,
                        category: e.target.value,
                    });
                }

                break;
        }
    };

    return (
        <div className={classnames('car-filter')}>
            <SelectFilter
                id="categoryId"
                values={category}
                handleClick={handleClickOprion}
                textLabel="Категории"
            />
        </div>
    );
};
CarFilter.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func,
};
export default CarFilter;
