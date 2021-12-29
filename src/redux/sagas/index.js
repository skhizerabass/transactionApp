import { all } from 'redux-saga/effects';
import envelope from './envelope';
import transactions from './transactions';
import user from './user';

const root = function* root() {
    yield all([
        user(),
        transactions(),
        envelope()
    ]);
};

export default root;
