import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga';
import mySaga from './Sagas';
import rootReducer from "./RootReducer";

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default Store;
