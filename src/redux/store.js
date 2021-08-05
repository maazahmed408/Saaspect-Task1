import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import blogReducer from "./reducers/blogReducer";
import allPostsReducer from "./reducers/allPostsReducer";
import usersReducer from "./reducers/usersReducer";
import postDetailReducer from "./reducers/postDetailReducer";
import { watcherSaga } from "../sagas/rootSaga";

const rootReducers = combineReducers({
	allPostsReducer,
	blogReducer,
	usersReducer,
	postDetailReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
