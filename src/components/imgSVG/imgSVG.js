import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './img.module.scss';

const classnames = classnamesBind.bind(styles);
const Search = () => {
    return (
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.87336 8.80503H10.5057L14.5 12.8073L13.3073 14L9.30503 10.0057V9.37336L9.08891 9.14923C8.17639 9.93368 6.99171 10.4059 5.70297 10.4059C2.82933 10.4059 0.5 8.07662 0.5 5.20297C0.5 2.32933 2.82933 0 5.70297 0C8.57662 0 10.9059 2.32933 10.9059 5.20297C10.9059 6.49171 10.4337 7.67639 9.64923 8.58891L9.87336 8.80503ZM2.19702 5.30302C2.19702 7.29837 3.80773 8.90908 5.80308 8.90908C7.79844 8.90908 9.40914 7.29837 9.40914 5.30302C9.40914 3.30767 7.79844 1.69696 5.80308 1.69696C3.80773 1.69696 2.19702 3.30767 2.19702 5.30302Z"
                fill="#CACEDB"
            />
        </svg>
    );
};

const Alert = () => {
    return (
        <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.375 9.04949V14.3727L17.5 16.502V17.5667H0.5V16.502L2.625 14.3727V9.04949C2.625 5.77038 4.35687 3.04489 7.40625 2.32093V1.59697C7.40625 0.713313 8.11812 0 9 0C9.88188 0 10.5938 0.713313 10.5938 1.59697V2.32093C13.6325 3.04489 15.375 5.78103 15.375 9.04949ZM11.2667 18.7C11.2667 19.9467 10.2467 20.9667 9 20.9667C7.742 20.9667 6.73334 19.9467 6.73334 18.7H11.2667Z"
                fill="#818EA3"
            />
        </svg>
    );
};
const Arrow = () => {
    return (
        <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
            <path d="M0 0.5L4.25 5L8.5 0.5H0Z" fill="#ABB6BF" />
        </svg>
    );
};

const Burger = (props) => {
    const { burgerActive, setBurgerActive } = props;
    return (
        <svg
            className={classnames('burger', {
                'burger-active': burgerActive,
            })}
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            onClick={() => setBurgerActive(!burgerActive)}
        >
            <g id="Icon">
                <path d="M4,6.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                <path d="M4,12.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                <path d="M4,18.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
            </g>
        </svg>
    );
};
Burger.propTypes = {
    burgerActive: PropTypes.bool,
    setBurgerActive: PropTypes.func,
};

const Logo = (props) => {
    const { width, height } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 45 45" fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 22.25C0 9.96178 9.96198 0 22.2504 0C34.538 0 44.5 9.96178 44.5 22.25C44.5 25.0644 43.9774 27.7567 43.0241 30.2353C41.3767 27.6868 38.5104 26 35.25 26C30.1414 26 26 30.1414 26 35.25C26 38.5104 27.6868 41.3768 30.2354 43.0241C27.7569 43.9775 25.0647 44.5 22.2504 44.5C9.96198 44.5 0 34.5382 0 22.25ZM30.2354 43.0241C31.6801 43.9579 33.4018 44.5 35.25 44.5C40.3586 44.5 44.5 40.3586 44.5 35.25C44.5 33.4017 43.9579 31.6801 43.0241 30.2353C40.7682 36.1002 36.1001 40.7682 30.2354 43.0241Z"
                fill="#0EC261"
            />
        </svg>
    );
};

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

export { Search, Alert, Arrow, Burger, Logo };
