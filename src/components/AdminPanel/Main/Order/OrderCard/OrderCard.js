import React from 'react';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './orderCard.module.scss';
import Servises from './Servises/Servises';
import parseDateToFormat from '../../../../../utils/parseDateToFormat';

const OrderCard = (props) => {
    const { order } = props;
    const classnames = classnamesBind.bind(styles);
    const dateFrom = parseDateToFormat(order.dateFrom);
    const dateTo = parseDateToFormat(order.dateTo);
    return (
        <div className={classnames('order-card')}>
            <div className={classnames('order-card__main-data')}>
                <div className={classnames('order-card__wrap-img')}>
                    {order.carId && (
                        <div
                            className={classnames('order-card__img')}
                            style={
                                order.carId.thumbnail.path.startsWith('/files/')
                                    ? {}
                                    : {
                                          backgroundImage:
                                              'url(' +
                                              order.carId.thumbnail.path +
                                              ')',
                                      }
                            }
                        ></div>
                    )}
                </div>

                <div className={classnames('order-card__data')}>
                    <span className={classnames('order-card__text')}>
                        <b className={classnames('order-card__strong-text')}>
                            {order.carId && order.carId.name}
                        </b>
                        {order.cityId && (
                            <>
                                {' '}
                                в{' '}
                                <b
                                    className={classnames(
                                        'order-card__strong-text'
                                    )}
                                >
                                    {order.cityId.name}
                                </b>
                            </>
                        )}
                        {order.pointId && <>, {order.pointId.address}</>}
                    </span>
                    <span className={classnames('order-card__text')}>
                        {dateFrom} - {dateTo}
                    </span>
                    <span className={classnames('order-card__text')}>
                        {order.color && (
                            <>
                                Цвет:{' '}
                                <b
                                    className={classnames(
                                        'order-card__strong-text'
                                    )}
                                >
                                    {order.color}
                                </b>
                            </>
                        )}
                    </span>
                </div>
            </div>
            <div className={classnames('order-card__right-content')}>
                <Servises order={order} />
                <span className={classnames('order-card__price')}>
                    {order.price}
                </span>
                <button className={classnames('order-car__btn-update')}>
                    Изменить
                </button>
            </div>
        </div>
    );
};
OrderCard.propTypes = {
    order: PropTypes.object,
};
export default OrderCard;
