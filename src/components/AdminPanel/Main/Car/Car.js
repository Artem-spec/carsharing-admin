import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './car.module.scss';
import CarFilter from './CarFilter/CarFilter';
import Pagination from '../Pagination/Pagination';
import ButtonUpdate from '../Button/ButtonUpdate/ButtonUpdate';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import ButtonCreate from '../Button/ButtonCreate/ButtonCreate';
import CarModify from './CarModify/CarModify';

const Car = () => {
    const classnames = classnamesBind.bind(styles);
    const [pageItems, setPageItems] = useState([]);
    const [filter, setFilter] = useState({
        filterCategory: '',
    });
    const [activeCreate, setActiveCreate] = useState(false);
    const [updateItem, setUpdateItem] = useState(null);
    const [newPagination, setNewPagination] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className={classnames('car')}>
            <h3 className={classnames('car__heading')}>Список машин</h3>
            <div className={classnames('car__content')}>
                <div className={classnames('car__filter')}>
                    <CarFilter filter={filter} setFilter={setFilter} />
                    <div className={classnames('car__create')}>
                        <ButtonCreate
                            setActiveCreate={setActiveCreate}
                            setUpdateItem={setUpdateItem}
                        />
                    </div>
                </div>
                {!!pageItems.length && (
                    <div className={classnames('car__table-wrap')}>
                        <table className={classnames('car__table')}>
                            <thead className={classnames('car__thead')}>
                                <tr className={classnames('car__tr')}>
                                    <th>Название</th>
                                    <th>Номер</th>
                                    <th>Цена</th>
                                    <th>Бензин</th>
                                    <th>Картинка</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody className={classnames('car__tbody')}>
                                {pageItems.map((item) => (
                                    <tr
                                        key={item.id}
                                        className={classnames('car__tr', {
                                            'car__tr-active': selectedItem === item.id
                                        })}
                                        onClick={() => setSelectedItem(item.id)}
                                    >
                                        <th className={classnames('car__th')}>{item.name}</th>
                                        <td style={{ width: '80px' }}>
                                            {item.number}
                                        </td>
                                        <td style={{ width: '100px' }}>
                                            от {item.priceMin} до{' '}
                                            {item.priceMax}
                                            &#8381;
                                        </td>
                                        <td>{item.tank}</td>
                                        <td
                                            className={classnames(
                                                'car__wrap-img'
                                            )}
                                            style={{ minWidth: '200px' }}
                                        >
                                            <div
                                                className={classnames(
                                                    'car__img'
                                                )}
                                                style={
                                                    item.thumbnail.path.startsWith(
                                                        '/files/'
                                                    )
                                                        ? {}
                                                        : {
                                                            backgroundImage:
                                                                'url(' +
                                                                item.thumbnail
                                                                    .path +
                                                                ')',
                                                        }
                                                }
                                            ></div>
                                        </td>
                                        <td>
                                            <ButtonUpdate
                                                setUpdateItem={setUpdateItem}
                                                setActiveCreate={
                                                    setActiveCreate
                                                }
                                                item={item}
                                            />
                                            <ButtonDelete
                                                path="car"
                                                item={item}
                                                setNewPagination={
                                                    setNewPagination
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <Pagination
                    path="car"
                    limit={5}
                    pageItems={pageItems}
                    setPageItems={setPageItems}
                    filter={filter}
                    newPagination={newPagination}
                    setNewPagination={setNewPagination}
                />
            </div>
            {activeCreate && (
                <CarModify
                    item={updateItem}
                    active={activeCreate}
                    setActive={setActiveCreate}
                    setNewPagination={setNewPagination}
                />
            )}
        </div>
    );
};
export default Car;
