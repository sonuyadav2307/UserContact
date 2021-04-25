import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'
import {loadState ,saveState} from '../helpers/localStorage'
const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();



//---
const store =  createStore(
    rootReducer,persistedState,
    compose(applyMiddleware(sagaMiddleware),  window.devToolsExtension && window.devToolsExtension())
  )

store.subscribe(() => {
    saveState({
        users: store.getState().users,
        authentication :  store.getState().authentication
    });
  });
sagaMiddleware.run(rootSaga)
export default store