import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './pointsFilter.module.scss';
import { getDataFilter } from '../../../../../utils/getDataAPI';
import SelectFilter from '../../SelectFilter/SelectFilter';

const PointsFilter = (props) => {
    const { filter, setFilter } = props;
    const classnames = classnamesBind.bind(styles);
    const [city, setCity] = useState(null);
    const [currentOptions, setCurrentOptions] = useState({
        city: '',
    });

    useEffect(() => {
        const getFilter = async () => {
            const resultCity = await getDataFilter('/city');
            setCity(resultCity);
            setCurrentOptions({
                ...currentOptions,
                city: resultCity[0].id,
            });
            setFilter({
                filterCity: `cityId=${resultCity[0].id}`,
            });
        };
        getFilter();
    }, []);

    const handleClickOprion = (e, key) => {
        switch (key) {
            case 'cityId':
                if (
                    currentOptions.city &&
                    currentOptions.city !== e.target.value
                ) {
                    setFilter({
                        ...filter,
                        filterCity: `cityId=${e.target.value}`,
                    });
                    setCurrentOptions({
                        ...currentOptions,
                        city: e.target.value,
                    });
                }

                break;
        }
    };

    return (
        <div className={classnames('points-filter')}>
            <SelectFilter
                id="cityId"
                values={city}
                handleClick={handleClickOprion}
                textLabel="Город"
            />
        </div>
    );
};
PointsFilter.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func,
};
export default PointsFilter;
