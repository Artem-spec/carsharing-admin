import React from 'react';
import PropTypes from 'prop-types';

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

export default Logo;
