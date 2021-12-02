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

const insertItem = (values, path) => {
  return axiosConfig.post(`/${path}`, values).then((response) => {
    return response.data;
  });
};

const updateItem = (id, values, path) => {
  return axiosConfig.put(`/${path}/${id}`, values).then((response) => {
    return response.data;
  });
};

const deleteData = (path, id) => {
  return axiosConfig.delete(`/${path}/${id}`).then((response) => {
    return response.data;
  });
};

export { getDataFilter, getDataList, insertItem, updateItem, deleteData };
