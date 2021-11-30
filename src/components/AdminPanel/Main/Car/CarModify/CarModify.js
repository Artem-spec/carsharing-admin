import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classnamesBind from 'classnames/bind';
import styles from './carModify.module.scss';
import axiosConfig from '../../../../../utils/axiosConfig';
import HeaderModifyWindow from '../../HeaderModifyWindow/HeaderModifyWindow';
import InputForm from '../../InputForm/InputForm';
import SelectForm from '../../SelectForm/SelectForm';
import { getDataFilter } from '../../../../../utils/getDataAPI';
import Color from './Color/Color';
import InputCarImage from './InputCarImage/InputCarImage';

const defStateDataPost = {
    priceMax: 0,
    priceMin: 0,
    name: '',
    thumbnail: {},
    description: '',
    categoryId: {},
    colors: [],
    number: '',
    tank: 0,
};

const CarModify = (props) => {
    const classnames = classnamesBind.bind(styles);

    const { item, active, setActive, setNewPagination } = props;
    const { auth } = useSelector((state) => state);
    const [dataPost, setDataPost] = useState(defStateDataPost);
    const [category, setCategory] = useState(null);
    const [error, setError] = useState({
        required: false,
        price: false,
        message: '',
    });
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const getCategory = async () => {
            await getDataFilter('/category').then((res) => setCategory(res));
        };
        getCategory();
    }, []);

    useEffect(() => {
        setLoad(true);
        if (item) {
            setDataPost({
                ...item,
                thumbnail: {
                    ...item.thumbnail,
                },
            });
        } else {
            setDataPost({
                ...dataPost,
            });
        }
        setLoad(false);
    }, [item]);

    useEffect(() => {
        if (
            !dataPost.priceMax ||
            !dataPost.priceMin ||
            !dataPost.name ||
            !Object.keys(dataPost.thumbnail).length ||
            (dataPost.categoryId && !Object.keys(dataPost.categoryId).length)
        ) {
            setError({
                required: true,
                price: false,
                message: 'Заполните обязательные поля',
            });
        } else {
            if (dataPost.priceMin > dataPost.priceMax) {
                setError({
                    required: false,
                    price: true,
                    message: 'Цена от больше цены до',
                });
            } else {
                setError({
                    required: false,
                    price: false,
                    message: '',
                });
            }
        }
    }, [dataPost]);

    const handleClickBtn = () => {
        if (!error.required && !error.price) {
            axiosConfig.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${auth.auth_success}`;
            if (!item) {
                const post = async () => {
                    await axiosConfig.post('/car', dataPost);
                    setDataPost(defStateDataPost);
                    setNewPagination(true);
                };
                post();
            } else {
                const put = async () => {
                    await axiosConfig.put(`/car/${item.id}`, dataPost);
                    setDataPost(defStateDataPost);
                    setNewPagination(true);
                };
                put();
            }
            setActive(false);
        }
    };
    return (
        <div
            className={classnames('car-modify', {
                'car-modify-active': active,
            })}
        >
            {!load && (
                <div className={classnames('car-modify__content')}>
                    <HeaderModifyWindow
                        heading={!item ? 'Создание' : 'Редактирование'}
                        setActiveWindow={setActive}
                    />
                    <div className={classnames('car-modify__input-wrap')}>
                        <div
                            className={classnames(
                                'car-modify__input-wrap-left'
                            )}
                        >
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <InputForm
                                    id="priceMin"
                                    type="number"
                                    value={dataPost.priceMin}
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                    textLabel="Цена от:"
                                    required={true}
                                    error={error.price}
                                />
                            </div>
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <InputForm
                                    id="priceMax"
                                    type="number"
                                    value={dataPost.priceMax}
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                    textLabel="Цена до:"
                                    required={true}
                                />
                            </div>
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <InputForm
                                    id="name"
                                    type="text"
                                    value={dataPost.name}
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                    textLabel="Название:"
                                    required={true}
                                />
                            </div>
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <InputCarImage
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                    required={true}
                                />
                            </div>
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <InputForm
                                    id="description"
                                    type="text"
                                    value={dataPost.description}
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                    textLabel="Описание:"
                                />
                            </div>
                        </div>
                        <div
                            className={classnames(
                                'car-modify__input-wrap-right'
                            )}
                        >
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                {category && (
                                    <SelectForm
                                        id="categoryId"
                                        values={category}
                                        item={item}
                                        dataPost={dataPost}
                                        setDataPost={setDataPost}
                                        textLabel="Категория:"
                                        required={true}
                                    />
                                )}
                            </div>
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <InputForm
                                    id="number"
                                    type="text"
                                    value={dataPost.number}
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                    textLabel="Номер:"
                                />
                            </div>
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <InputForm
                                    id="tank"
                                    type="number"
                                    value={dataPost.tank}
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                    textLabel="Бензин:"
                                />
                            </div>
                            <div
                                className={classnames(
                                    'car-modify__group-input'
                                )}
                            >
                                <Color
                                    dataPost={dataPost}
                                    setDataPost={setDataPost}
                                />
                            </div>
                        </div>
                    </div>

                    <span
                        className={classnames('car-modify__error-msg', {
                            'car-modify__error': error.required || error.price,
                        })}
                    >
                        {error.message}
                    </span>
                    <div className={classnames('car-modify__btn-wrap')}>
                        <button
                            className={classnames('car-modify__btn')}
                            onClick={(e) => {
                                handleClickBtn(e);
                            }}
                            type="submit"
                        >
                            Сохранить
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
CarModify.propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    setNewPagination: PropTypes.func,
};
export default CarModify;
