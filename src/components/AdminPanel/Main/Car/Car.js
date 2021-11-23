import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './car.module.scss';
import CarFilter from './CarFilter/CarFilter';
import Pagination from '../Pagination/Pagination';
import Loading from '../../../Loading/Loading';

const Car = () => {
    const classnames = classnamesBind.bind(styles);
    const [pageItems, setPageItems] = useState([]);
    const [filter, setFilter] = useState({
        filterCategory: '',
    });
    return (
        <div className={classnames('car')}>
            <h3 className={classnames('car__heading')}>Список машин</h3>
            <div className={classnames('car__content')}>
                <div className={classnames('car__filter')}>
                    <CarFilter filter={filter} setFilter={setFilter} />
                </div>
                {!filter.filterCategory && <Loading />}
                {filter.filterCategory && (
                    <>
                        {Boolean(pageItems.length) && (
                            <table className={classnames('car__table')}>
                                <thead className={classnames('car__thead')}>
                                    <tr className={classnames('car__tr')}>
                                        <td>Название</td>
                                        <td>Описание</td>
                                        <td>Номер</td>
                                        <td>Цена</td>
                                        <td>Бензин</td>
                                        <td>Картинка</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </thead>
                                <tbody className={classnames('car__tbody')}>
                                    {pageItems.map((item) => (
                                        <tr
                                            key={item.id}
                                            className={classnames('car__tr')}
                                        >
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.number}</td>
                                            <td>
                                                от {item.priceMin} до{' '}
                                                {item.priceMax}
                                                &#8381;
                                            </td>
                                            <td>{item.tank}</td>
                                            <td
                                                className={classnames(
                                                    'car__wrap-img'
                                                )}
                                            >
                                                <div
                                                    className={classnames(
                                                        'car__img'
                                                    )}
                                                    style={
                                                        item.thumbnail.path.startsWith(
                                                            '/files/'
                                                        )
                                                            ? {}
                                                            : {
                                                                  backgroundImage:
                                                                      'url(' +
                                                                      item
                                                                          .thumbnail
                                                                          .path +
                                                                      ')',
                                                              }
                                                    }
                                                ></div>
                                            </td>
                                            <td>
                                                {/* пока не придумал обработку, как удобнее оставил так. 
                                                Скорее всего это всё в отдельный компонент */}
                                                <button
                                                    className={classnames(
                                                        'car__btn-update'
                                                    )}
                                                >
                                                    Изменить
                                                </button>
                                                <button
                                                    className={classnames(
                                                        'car__btn-delete'
                                                    )}
                                                >
                                                    Удалить
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        <Pagination
                            path="car"
                            limit={5}
                            pageItems={pageItems}
                            setPageItems={setPageItems}
                            filter={filter}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
export default Car;
