import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './orderFilter.module.scss';
import { getDataFilter } from '../../../../../utils/getDataAPI';
import SelectFilter from '../../SelectFilter/SelectFilter';

const OrderFilters = (props) => {
    const { filter, setFilter } = props;
    const classnames = classnamesBind.bind(styles);

    const [citys, setCity] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const [currentOptions, setCurrentOptions] = useState({
        city: '',
        status: '',
    });

    useEffect(() => {
        const getData = async () => {
            const resultCity = await getDataFilter('/city');
            const resultStatus = await getDataFilter('/orderStatus');
            setCity(resultCity);
            setOrderStatus(resultStatus);
        };
        getData();
    }, []);

    const handleClickOption = (e, key) => {
        switch (key) {
            case 'cityId':
                if (currentOptions.city !== e.target.value) {
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
            case 'orderStatusId':
                if (currentOptions.status !== e.target.value) {
                    setCurrentOptions({
                        ...currentOptions,
                        status: e.target.value,
                    });
                    setFilter({
                        ...filter,
                        filterStatus: `orderStatusId=${e.target.value}`,
                    });
                }
                break;
        }
    };
    return (
        <div className={classnames('order-filter')}>
            <SelectFilter
                id="cityId"
                values={citys}
                handleClick={handleClickOption}
                textLabel="Город"
            />
            <SelectFilter
                id="orderStatusId"
                values={orderStatus}
                handleClick={handleClickOption}
                textLabel="Статус"
            />
        </div>
    );
};
OrderFilters.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func,
};
export default OrderFilters;
