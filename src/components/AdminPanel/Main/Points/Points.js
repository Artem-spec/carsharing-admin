import React, { useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './points.module.scss';
import Pagination from '../Pagination/Pagination';
import PointsFilter from './PointsFilter/PointsFilter';
import PointsModify from './PointsModify/PointsModify';
import ButtonUpdate from '../Button/ButtonUpdate/ButtonUpdate';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import ButtonCreate from '../Button/ButtonCreate/ButtonCreate';
import NoData from '../../NoData/NoData';

const Points = () => {
  const classnames = classnamesBind.bind(styles);
  const [pageItems, setPageItems] = useState([]);
  const [filter, setFilter] = useState({
    filterCity: '',
  });
  const [activeCreate, setActiveCreate] = useState(false);
  const [updateItem, setUpdateItem] = useState(null);
  const [newPagination, setNewPagination] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={classnames('points')}>
      <h3 className={classnames('points__heading-h3')}>Адреса</h3>
      <div className={classnames('points__content')}>
        <div className={classnames('points__filter')}>
          <PointsFilter filter={filter} setFilter={setFilter} />
          <div className={classnames('points__create')}>
            <ButtonCreate
              setActiveCreate={setActiveCreate}
              setUpdateItem={setUpdateItem}
            />
          </div>
        </div>
        {!pageItems && <NoData />}
        {pageItems && !!pageItems.length && (
          <div className={classnames('points__table-wrap')}>
            <table className={classnames('points__table')}>
              <thead className={classnames('points__thead')}>
                <tr className={classnames('points__tr')}>
                  <th>Город</th>
                  <th>Адрес</th>
                  <th>Описание</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody className={classnames('points__tbody')}>
                {pageItems.map((item) => {
                  if (item.cityId !== null)
                    return (
                      <tr
                        key={item.id}
                        className={classnames('points__tr', {
                          'points__tr-active': selectedItem === item.id,
                        })}
                        onClick={() => setSelectedItem(item.id)}
                      >
                        <th className={classnames('points__th')}>
                          {item.cityId.name}
                        </th>
                        <td>{item.address}</td>
                        <td style={{ width: '200px' }}>{item.name}</td>
                        <td>
                          <ButtonUpdate
                            setUpdateItem={setUpdateItem}
                            setActiveCreate={setActiveCreate}
                            item={item}
                          />
                          <ButtonDelete
                            path="point"
                            item={item}
                            setNewPagination={setNewPagination}
                          />
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        )}

        <Pagination
          path="point"
          limit={10}
          pageItems={pageItems}
          setPageItems={setPageItems}
          filter={filter}
          newPagination={newPagination}
          setNewPagination={setNewPagination}
        />
      </div>
      {activeCreate && (
        <PointsModify
          item={updateItem}
          active={activeCreate}
          setActive={setActiveCreate}
          setNewPagination={setNewPagination}
        />
      )}
    </div>
  );
};
export default Points;
