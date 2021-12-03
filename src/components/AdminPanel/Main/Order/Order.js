import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './order.module.scss';
import Pagination from '../Pagination/Pagination';
import OrderCard from './OrderCard/OrderCard';
import OrderFilters from './OrderFilters/OrderFilters';

const Order = () => {
    const classnames = classnamesBind.bind(styles);
    const [pageItems, setPageItems] = useState([]);
    const [filter, setFilter] = useState({
        filterCity: '',
        filterStatus: '',
    });

    return (
        <div className={classnames('order')}>
            <h3 className={classnames('order__heading')}>Заказы</h3>

            <div className={classnames('order__content')}>
                <div className={classnames('order__content-filter')}>
                    <OrderFilters filter={filter} setFilter={setFilter} />
                </div>
                {!!pageItems.length && (
                    <table className={classnames('order__content_items')}>
                        {pageItems.map((item, index) => (
                            <tbody key={index}>
                                <tr
                                    className={classnames(
                                        'order__content_item'
                                    )}
                                >
                                    <td>
                                        <OrderCard order={item} />
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                )}
                <Pagination
                    path="order"
                    limit={5}
                    pageItems={pageItems}
                    setPageItems={setPageItems}
                    filter={filter}
                />
            </div>
        </div>
    );
};
export default Order;
