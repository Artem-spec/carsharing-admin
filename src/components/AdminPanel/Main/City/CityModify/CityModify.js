import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './cityModify.module.scss';
import axiosConfig from '../../../../../utils/axiosConfig';
import HeaderModifyWindow from '../../HeaderModifyWindow/HeaderModifyWindow';
import InputForm from '../../InputForm/InputForm';

const CityModify = (props) => {
    const classnames = classnamesBind.bind(styles);

    const { item, active, setActive, setNewPagination } = props;
    const { auth } = useSelector((state) => state);
    const [dataPost, setDataPost] = useState({
        name: '',
    });
    const [error, setError] = useState({
        flag: false,
        message: '',
    });

    useEffect(() => {
        if (item) {
            setDataPost({
                ...item,
            });
        } else {
            setDataPost({
                name: '',
            });
        }
    }, [item]);

    useEffect(() => {
        if (!dataPost.name) {
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
                    await axiosConfig.post('/city', {
                        name: dataPost.name,
                    });
                    setNewPagination(true);
                };
                post();
            } else {
                const put = async () => {
                    await axiosConfig.put(`/city/${item.id}`, {
                        name: dataPost.name,
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
            className={classnames('city-modify', {
                'city-modify-active': active,
            })}
        >
            <div className={classnames('city-modify__content')}>
                <HeaderModifyWindow
                    heading={!item ? 'Создание' : 'Редактирование'}
                    setActiveWindow={setActive}
                />
                <div className={classnames('city-modify__group-input')}>
                    <InputForm
                        id="name"
                        type="text"
                        value={dataPost.name}
                        dataPost={dataPost}
                        setDataPost={setDataPost}
                        textLabel="Город"
                        required={true}
                    />
                </div>
                <span
                    className={classnames('city-modify__error-msg', {
                        'city-modify__error': error.flag,
                    })}
                >
                    {error.message}
                </span>
                <div className={classnames('city-modify__btn-wrap')}>
                    <button
                        className={classnames('city-modify__btn')}
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
CityModify.propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    setNewPagination: PropTypes.func,
};
export default CityModify;
