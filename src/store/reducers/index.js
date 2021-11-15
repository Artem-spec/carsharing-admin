import { combineReducers } from 'redux';
import authorization from './authorization';

const allReducers = combineReducers({
    auth: authorization,
});

export default allReducers;
