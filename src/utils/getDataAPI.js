import axiosConfig from './axiosConfig';

const getDataFilter = (path) => {
  return axiosConfig.get(path).then((res) => {
    return res.data.data;
  });
};

const getDataList = (key, path, page, limit, filter) => {
  axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${key}`;
  return axiosConfig
    .get(`/${path}?page=${page}&limit=${limit}${filter}`)
    .then((res) => {
      return res.data;
    });
};

const modifyData = (auth, id, values, path, setNewPagination) => {
  axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
  if (!id) {
    const post = async () => {
      await axiosConfig.post(`/${path}`, values);
      setNewPagination(true);
    };
    post();
  } else {
    const put = async () => {
      await axiosConfig.put(`/${path}/${id}`, values);
      setNewPagination(true);
    };
    put();
  }
};

const deleteData = (auth, path, id, setNewPagination) => {
  axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
  const deleteItem = async () => {
    await axiosConfig.delete(`/${path}/${id}`).then(() => {
      setNewPagination(true);
    });
  };
  deleteItem();
};

export { getDataFilter, getDataList, modifyData, deleteData };
