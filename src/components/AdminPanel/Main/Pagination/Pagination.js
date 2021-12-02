import React, { useEffect, useState } from 'react';
import classnamesBind from 'classnames/bind';
import styles from './pagination.module.scss';
import PropTypes from 'prop-types';
import { getDataList } from '../../../../utils/getDataAPI';
import Loading from '../../../Loading/Loading';
import NoData from '../../NoData/NoData';

const Pagination = (props) => {
  const { path, limit, setPageItems, filter, newPagination, setNewPagination } =
    props;
  const classnames = classnamesBind.bind(styles);

  const [page, setPage] = useState({
    page: 0,
    limit,
    pageClick: 0,
    countPage: 0,
    countItems: 0,
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getData();
  }, [filter]);

  useEffect(() => {
    if (newPagination) {
      getData(page.pageClick);
      setNewPagination(false);
    }
  }, [newPagination]);

  const handleClickPrev = () => {
    if (page.page > 0) {
      setPage({ ...page, page: page.page - 1 });
    }
  };

  const handleClickNext = () => {
    if (page.page + 3 < page.countPage) {
      // + 3, т.к всего перелистывать можем на 3 станицы
      setPage({ ...page, page: page.page + 1 });
    }
  };

  const handleClickPagination = (pageValue) => {
    const getData = async () => {
      setLoad(true);
      const filterRequest = getFilterRequest();
      const resultData = await getDataList(
        path,
        pageValue,
        page.limit,
        filterRequest
      );
      setPage({
        ...page,
        pageClick: pageValue,
      });
      setPageItems(resultData.data);
      setLoad(false);
    };
    getData();
  };

  const getFilterRequest = () => {
    let resultFilter = '';
    for (const key in filter) {
      if (filter[key]) {
        resultFilter = resultFilter + '&' + filter[key];
      }
    }
    return resultFilter;
  };

  const getData = async (pageActive = page.page) => {
    setLoad(true);
    const filterRequest = getFilterRequest();
    const resultData = await getDataList(
      path,
      pageActive,
      page.limit,
      filterRequest
    );
    setPageItems(resultData.data);
    setPage({
      ...page,
      pageClick: pageActive,
      countItems: resultData.count,
      countPage: Math.ceil(resultData.count / page.limit),
    });
    setLoad(false);
  };

  return (
    <>
      {load && <Loading />}
      {!load && (
        <>
          {!page.countPage && <NoData />}
          {!!page.countPage && (
            <nav
              className={classnames('pagination', {
                'pagination-visible': !page.countPage,
              })}
            >
              <ul className="pagination">
                {page.countPage >= 3 && (
                  <li
                    className={classnames('page-item', 'page-link')}
                    onClick={() => handleClickPagination(0)}
                  >
                    1
                  </li>
                )}
                {page.countPage >= 3 && (
                  <li
                    className={classnames('page-item', 'page-link')}
                    onClick={handleClickPrev}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </li>
                )}
                <li
                  className={classnames('page-item', 'page-link')}
                  onClick={() => handleClickPagination(page.page)}
                >
                  {page.page + 1}
                </li>
                {page.countPage >= 2 && (
                  <li
                    className={classnames('page-item', 'page-link', {
                      'pagination-visible': page.countPage < 2,
                    })}
                    onClick={() => handleClickPagination(page.page + 1)}
                  >
                    {page.page + 2}
                  </li>
                )}

                {page.countPage >= 3 && (
                  <li
                    className={classnames('page-item', 'page-link')}
                    onClick={() => handleClickPagination(page.page + 2)}
                  >
                    {page.page + 3}
                  </li>
                )}

                {page.countPage >= 3 && (
                  <li
                    className={classnames('page-item', 'page-link')}
                    onClick={handleClickNext}
                  >
                    <span>&raquo;</span>
                  </li>
                )}

                {page.countPage >= 3 && (
                  <li
                    className={classnames('page-item', 'page-link')}
                    onClick={() => handleClickPagination(page.countPage - 1)}
                  >
                    {page.countPage}
                  </li>
                )}
              </ul>
            </nav>
          )}
        </>
      )}
    </>
  );
};
Pagination.propTypes = {
  path: PropTypes.string,
  limit: PropTypes.number,
  setPageItems: PropTypes.func,
  filter: PropTypes.object,
  newPagination: PropTypes.bool,
  setNewPagination: PropTypes.func,
};
export default Pagination;
