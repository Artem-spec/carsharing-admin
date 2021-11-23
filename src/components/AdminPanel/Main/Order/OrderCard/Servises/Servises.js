import React, { useEffect, useState } from 'react';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './servises.module.scss';

const Servises = (props) => {
    const { order } = props;
    const classnames = classnamesBind.bind(styles);
    const [servises, setServises] = useState({
        fuel: false,
        babyChair: false,
        rightHand: false,
    });
    useEffect(() => {
        if (Object.keys(order).includes('isFullTank'))
            setServises({
                ...servises,
                fuel: order.isFullTank,
            });
        if (Object.keys(order).includes('isNeedChildChair'))
            setServises({
                ...servises,
                babyChair: order.isNeedChildChair,
            });
        if (Object.keys(order).includes('isRightWheel'))
            setServises({
                ...servises,
                rightHand: order.isRightWheel,
            });
    }, []);
    return (
        <div className={classnames('servises')}>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    defaultChecked={order.isFullTank}
                    id="fuel"
                />
                <label className="form-check-label" htmlFor="fuel">
                    Полный бак
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    defaultChecked={order.isNeedChildChair}
                    id="babyChair"
                />
                <label className="form-check-label" htmlFor="babyChair">
                    Детское кресло
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    defaultChecked={order.isRightWheel}
                    id="rightHand"
                />
                <label className="form-check-label" htmlFor="rightHand">
                    Правый руль
                </label>
            </div>
        </div>
    );
};
Servises.propTypes = {
    order: PropTypes.object,
};
export default Servises;
