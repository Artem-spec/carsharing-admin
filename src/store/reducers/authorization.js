const initState = {
    auth_success: '',
    auth_error: true,
};
const authorization = (state = initState, action) => {
    switch (action.type) {
        case 'AUTHORIZATION':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default authorization;
