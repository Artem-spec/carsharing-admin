import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './points.module.scss';
import Pagination from '../Pagination/Pagination';
import PointsFilter from './PointsFilter/PointsFilter';

const Points = () => {
    const classnames = classnamesBind.bind(styles);
    const [pageItems, setPageItems] = useState([]);
    const [filter, setFilter] = useState({
        filterCity: '',
    });
    return (
        <div className={classnames('points')}>
            <h3 className={classnames('points__heading-h3')}>Города</h3>
            <div className={classnames('points__content')}>
                <div className={classnames('points__filter')}>
                    <PointsFilter filter={filter} setFilter={setFilter} />
                </div>
                {!!pageItems.length && (
                    <div className={classnames('points__table-wrap')}>
                        <table className={classnames('points__table')}>
                            <thead className={classnames('points__thead')}>
                                <tr className={classnames('points__tr')}>
                                    <th>Город</th>
                                    <th>Адрес</th>
                                    <th>Описание</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody className={classnames('points__tbody')}>
                                {pageItems.map((item) => (
                                    <tr
                                        key={item.id}
                                        className={classnames('points__tr')}
                                    >
                                        <th>{item.cityId.name}</th>
                                        <td>{item.address}</td>
                                        <td style={{ width: '200px' }}>
                                            {item.name}
                                        </td>
                                        <td>
                                            {/* пока не придумал обработку, как удобнее оставил так. 
                                                Скорее всего это всё в отдельный компонент */}

                                            <button
                                                className={classnames(
                                                    'points__btn-update'
                                                )}
                                            >
                                                Изменить
                                            </button>
                                            <button
                                                className={classnames(
                                                    'points__btn-delete'
                                                )}
                                            >
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <Pagination
                    path="point"
                    limit={10}
                    pageItems={pageItems}
                    setPageItems={setPageItems}
                    filter={filter}
                />
            </div>
        </div>
    );
};
export default Points;
