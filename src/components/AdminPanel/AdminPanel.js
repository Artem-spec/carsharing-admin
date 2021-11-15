import React from 'react';
import classnamesBind from 'classnames/bind';
import styles from './adminPanel.module.scss';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Menu from './Menu/Menu';

const AdminPanel = () => {
    const classnames = classnamesBind.bind(styles);
    return (
        <div className={classnames('wrap')}>
            <Menu />
            <div className={classnames('content')}>
                <Header />
                <div className={classnames('wrap-main-footer')}>
                    <Main />
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default AdminPanel;
