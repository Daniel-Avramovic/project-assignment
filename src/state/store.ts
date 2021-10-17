import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers/combineReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
// const middleware = [thunk, sagaMiddleware]
export const store = createStore(
    reducers,{
    },
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);