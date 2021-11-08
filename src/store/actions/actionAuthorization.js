export const AUTHORIZATION = 'AUTHORIZATION';

export const changeAuthorization = (authorization) => {
    return { type: AUTHORIZATION, payload: authorization };
};
