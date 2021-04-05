import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers';
import rootSagas from '../middlewares/sagas';
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
