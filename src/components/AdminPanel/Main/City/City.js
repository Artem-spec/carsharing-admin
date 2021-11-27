import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './city.module.scss';
import parseDateToFormat from '../../../../utils/parseDateToFormat';
import Pagination from '../Pagination/Pagination';

const City = () => {
    const classnames = classnamesBind.bind(styles);
    const [pageItems, setPageItems] = useState([]);

    return (
        <div className={classnames('city')}>
            <h3 className={classnames('city__heading-h3')}>Города</h3>
            <div className={classnames('city__content')}>
                {pageItems && (
                    <div className={classnames('city__table-wrap')}>
                        <table className={classnames('city__table')}>
                            <thead className={classnames('city__thead')}>
                                <tr className={classnames('city__tr')}>
                                    <th>Город</th>
                                    <th>Дата создания</th>
                                    <th>Дата редактирования</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>

                            <tbody className={classnames('city__tbody')}>
                                {pageItems.map((item) => (
                                    <tr
                                        key={item.id}
                                        className={classnames('city__tr')}
                                    >
                                        <th>{item.name}</th>
                                        <td>
                                            {parseDateToFormat(item.createdAt)}
                                        </td>
                                        <td>
                                            {parseDateToFormat(item.updatedAt)}
                                        </td>
                                        <td>
                                            {/* пока не придумал обработку, как удобнее оставил так. 
                                                Скорее всего это всё в отдельный компонент */}
                                            <button
                                                className={classnames(
                                                    'city__btn-update'
                                                )}
                                            >
                                                Изменить
                                            </button>
                                            <button
                                                className={classnames(
                                                    'city__btn-delete'
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
                    path="city"
                    limit={10}
                    setPageItems={setPageItems}
                />
            </div>
        </div>
    );
};
export default City;
