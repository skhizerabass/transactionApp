import { combineReducers } from 'redux';
import user from './user';
import transaction from './transaction';
import envelope from './envelope';

export default combineReducers({
    user,
    transaction,
    envelope
});
