import React from 'react';
import PropTypes from 'prop-types';
import classnamesBind from 'classnames/bind';
import styles from './inputCarImage.module.scss';

const InputCarImage = (props) => {
    const { dataPost, setDataPost, required } = props;
    const classnames = classnamesBind.bind(styles);

    const handleChangeInput = (e) => {
        if (e.target.files.lenght) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                setDataPost({
                    ...dataPost,
                    thumbnail: {
                        mimetype: e.target.files[0].type,
                        originalname: e.target.files[0].name,
                        path: reader.result,
                        size: e.target.files[0].size,
                    },
                });
            };
        }
    };

    return (
        <>
            <label htmlFor="thumbnail" className={classnames('')}>
                Картинка:
            </label>
            <input
                type="file"
                id="thumbnail"
                accept="image/png"
                className={classnames('form-control', {
                    'input-car-image__required': !dataPost.thumbnail.path && required
                })}
                onChange={handleChangeInput}
            />
        </>
    );
};
InputCarImage.propTypes = {
    dataPost: PropTypes.object,
    setDataPost: PropTypes.func,
    required: PropTypes.bool,
};
export default InputCarImage;
