import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './city.module.scss';
import parseDateToFormat from '../../../../utils/parseDateToFormat';
import Pagination from '../Pagination/Pagination';
import CityModify from './CityModify/CityModify';
import ButtonUpdate from '../Button/ButtonUpdate/ButtonUpdate';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import ButtonCreate from '../Button/ButtonCreate/ButtonCreate';

const City = () => {
  const classnames = classnamesBind.bind(styles);
  const [pageItems, setPageItems] = useState([]);
  const [activeCreate, setActiveCreate] = useState(false);
  const [updateItem, setUpdateItem] = useState(null);
  const [newPagination, setNewPagination] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={classnames('city')}>
      <h3 className={classnames('city__heading-h3')}>Города</h3>
      <div className={classnames('city__content')}>
        <div className={classnames('city__create')}>
          <ButtonCreate
            setActiveCreate={setActiveCreate}
            setUpdateItem={setUpdateItem}
          />
        </div>
        {pageItems && (
          <div className={classnames('city__table-wrap')}>
            <table className={classnames('city__table')}>
              <thead className={classnames('city__thead')}>
                <tr className={classnames('city__tr')}>
                  <th>Город</th>
                  <th>Дата создания</th>
                  <th>Дата редактирования</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>

              <tbody className={classnames('city__tbody')}>
                {pageItems.map((item) => (
                  <tr
                    key={item.id}
                    className={classnames('city__tr', {
                      'city__tr-active': selectedItem === item.id,
                    })}
                    onClick={() => setSelectedItem(item.id)}
                  >
                    <th className={classnames('city__th')}>{item.name}</th>
                    <td>{parseDateToFormat(item.createdAt)}</td>
                    <td>{parseDateToFormat(item.updatedAt)}</td>
                    <td>
                      <ButtonUpdate
                        setUpdateItem={setUpdateItem}
                        setActiveCreate={setActiveCreate}
                        item={item}
                      />
                      <ButtonDelete
                        path="city"
                        item={item}
                        setNewPagination={setNewPagination}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Pagination
          path="city"
          limit={10}
          setPageItems={setPageItems}
          newPagination={newPagination}
          setNewPagination={setNewPagination}
        />
      </div>
      <CityModify
        item={updateItem}
        active={activeCreate}
        setActive={setActiveCreate}
        setNewPagination={setNewPagination}
      />
    </div>
  );
};
export default City;
