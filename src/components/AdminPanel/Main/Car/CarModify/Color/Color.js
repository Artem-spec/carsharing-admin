import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './color.module.scss';
import { PlusAdd, Cross } from '../../../../../imgSVG/imgSVG';

const Color = (props) => {
    const { dataPost, setDataPost } = props;
    const classnames = classnamesBind.bind(styles);
    const [color, setColor] = useState('');

    const handleClickAddColor = () => {
        if (color) {
            setDataPost({
                ...dataPost,
                colors: [...dataPost.colors, color],
            });
            setColor('');
        }

    };
    const handleClickDeleteColor = (index) => {
        let resultColors = dataPost.colors;
        resultColors.splice(index, 1);
        setDataPost({
            ...dataPost,
            colors: resultColors,
        });
    };
    return (
        <>
            <label htmlFor="colors" className={classnames('color__label')}>
                Цвет:
            </label>
            <div className={classnames('color-wrap-plus')}>
                <input
                    type="text"
                    id="colors"
                    className="form-control"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                />
                <div className={classnames('color__plus-add')}>
                    <PlusAdd handleClick={handleClickAddColor} />
                </div>
            </div>
            <ul className={classnames('color__list')}>
                {dataPost.colors &&
                    dataPost.colors.map((color, index) => (
                        <li
                            key={index}
                            className={classnames('color__item')}
                            onClick={() => handleClickDeleteColor(index)}
                        >
                            {color}
                            <div className={classnames('color__cross')}>
                                <Cross />
                            </div>
                        </li>
                    ))}
            </ul>
        </>
    );
};
Color.propTypes = {
    dataPost: PropTypes.object,
    setDataPost: PropTypes.func,
};
export default Color;
