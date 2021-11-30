import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classnamesBind from 'classnames/bind';
import styles from './pointsModify.module.scss';
import axiosConfig from '../../../../../utils/axiosConfig';
import { getDataFilter } from '../../../../../utils/getDataAPI';
import HeaderModifyWindow from '../../HeaderModifyWindow/HeaderModifyWindow';
import InputForm from '../../InputForm/InputForm';
import SelectForm from '../../SelectForm/SelectForm';

const PointsModify = (props) => {
    const classnames = classnamesBind.bind(styles);

    const { item, active, setActive, setNewPagination } = props;
    const { auth } = useSelector((state) => state);
    const [dataPost, setDataPost] = useState({
        name: '',
        cityId: '',
        address: '',
    });
    const [city, setCity] = useState(null);
    const [error, setError] = useState({
        flag: false,
        message: '',
    });

    useEffect(() => {
        const getCity = async () => {
            const resultCity = await getDataFilter('/city');
            setCity(resultCity);
        };
        getCity();
    }, []);

    useEffect(() => {
        if (item) {
            setDataPost({
                ...item,
            });
        } else {
            setDataPost({
                ...dataPost,
            });
        }
    }, [item]);
    useEffect(() => {
        if (!dataPost.name || !dataPost.address || !dataPost.cityId) {
            setError({
                flag: true,
                message: 'Заполните обязательные поля',
            });
        } else {
            setError({
                flag: false,
                message: '',
            });

        }
    }, [dataPost])

    const handleClickBtn = () => {
        if (!error.flag) {
            axiosConfig.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${auth.auth_success}`;
            if (!item) {
                const post = async () => {
                    await axiosConfig.post('/point', {
                        name: dataPost.name,
                        cityId: dataPost.cityId,
                        address: dataPost.address,
                    });
                    setNewPagination(true);
                };
                post();
            } else {
                const put = async () => {
                    await axiosConfig.put(`/point/${item.id}`, {
                        name: dataPost.name,
                        cityId: dataPost.cityId,
                        address: dataPost.address,
                    });
                    setNewPagination(true);
                };
                put();
            }
            setActive(false);
        }
    };
    return (
        <div
            className={classnames('points-modify', {
                'points-modify-active': active,
            })}
        >
            <div className={classnames('points-modify__content')}>
                <HeaderModifyWindow
                    heading={!item ? 'Создание' : 'Редактирование'}
                    setActiveWindow={setActive}
                />
                <div className={classnames('points-modify__group-input')}>
                    <InputForm
                        id="address"
                        type="text"
                        value={dataPost.address}
                        dataPost={dataPost}
                        setDataPost={setDataPost}
                        textLabel="Адрес:"
                        required={true}
                    />
                </div>
                <div className={classnames('points-modify__group-input')}>
                    {city &&
                        <SelectForm
                            id="cityId"
                            values={city}
                            item={item}
                            dataPost={dataPost}
                            setDataPost={setDataPost}
                            textLabel="Город:"
                            required={true}
                        />
                    }

                </div>
                <div className={classnames('points-modify__group-input')}>
                    <InputForm
                        id="name"
                        type="text"
                        value={dataPost.name}
                        dataPost={dataPost}
                        setDataPost={setDataPost}
                        textLabel="Описание"
                        required={true}
                    />
                </div>
                <span
                    className={classnames('points-modify__error-msg', {
                        'points-modify__error': error.flag,
                    })}
                >
                    {error.message}
                </span>
                <div className={classnames('points-modify__btn-wrap')}>
                    <button
                        className={classnames('points-modify__btn')}
                        onClick={(e) => {
                            handleClickBtn(e);
                        }}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};
PointsModify.propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    setNewPagination: PropTypes.func,
};
export default PointsModify;
