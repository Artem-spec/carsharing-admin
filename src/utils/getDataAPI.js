import axiosConfig from './axiosConfig';

const getDataFilter = (path) => {
  return axiosConfig.get(path).then((response) => {
    return response.data.data;
  });
};

const getDataList = (path, page, limit, filter) => {
  return axiosConfig
    .get(`/${path}?page=${page}&limit=${limit}${filter}`)
    .then((response) => {
      return response.data;
    });
};

const insertItem = (values, path, setNewPagination, setActive) => {
  return axiosConfig.post(`/${path}`, values).then((response) => {
    setNewPagination(true);
    setActive(false);
    return response.data;
  });
};

const updateItem = (id, values, path, setNewPagination, setActive) => {
  return axiosConfig.put(`/${path}/${id}`, values).then((response) => {
    setNewPagination(true);
    setActive(false);
    return response.data;
  });
};

const deleteData = (path, id, setNewPagination) => {
  return axiosConfig.delete(`/${path}/${id}`).then((response) => {
    setNewPagination(true);
    return response.data;
  });
};

export { getDataFilter, getDataList, insertItem, updateItem, deleteData };
