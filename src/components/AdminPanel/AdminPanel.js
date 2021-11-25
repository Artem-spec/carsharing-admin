import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import classnamesBind from 'classnames/bind';
import styles from './adminPanel.module.scss';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Menu from './Menu/Menu';

const AdminPanel = () => {
    const classnames = classnamesBind.bind(styles);
    const { path } = useRouteMatch();
    return (
        <div className={classnames('wrap')}>
            <div className={classnames('content')}>
                <Header />
                <div className={classnames('content-wrap')}>
                    <div className={classnames('content-left')}>
                        <Menu />
                    </div>
                    <div className={classnames('content-right')}>
                        <div className={classnames('main')}>
                            <Route path={`${path}/:id`}>
                                <Main />
                            </Route>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminPanel;
