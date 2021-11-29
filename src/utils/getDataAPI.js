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

export { getDataFilter, getDataList };
