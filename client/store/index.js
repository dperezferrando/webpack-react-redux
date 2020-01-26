import { createStore,  compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from "../reducers";
import rootEpic from "../epics";

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;