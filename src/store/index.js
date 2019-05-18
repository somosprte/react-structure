import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import sagas from 'store/sagas';
import createRootReducer from 'store/ducks';
import history from 'routes/history';

const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

// const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;
const createAppropriateStore = createStore;
const store = createAppropriateStore(createRootReducer(history), applyMiddleware(...middleware));
sagaMiddleware.run(sagas);

export default store;
