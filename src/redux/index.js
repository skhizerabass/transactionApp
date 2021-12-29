import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from 'src/redux/reducers';
import sagas from 'src/redux/sagas';

const createStore = reduxCreateStore;


let sagaMiddleware;

sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);


export default store;
