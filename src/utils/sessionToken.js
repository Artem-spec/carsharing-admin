const getToken = () => {
    return sessionStorage.getItem('token');
};
const setToken = (value) => {
    sessionStorage.setItem('token', value);
};
export { getToken, setToken };
