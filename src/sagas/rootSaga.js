import { takeEvery, all, fork } from "redux-saga/effects";
import {
	GET_POSTS_REQUESTED,
	GET_USERS_REQUESTED,
} from "../redux/action/action-type";
import { handleGetPosts } from "./handlers/postsHandler";
import { handleGetUsers } from "./handlers/usersHandler";

function* userSaga() {
	yield takeEvery(GET_USERS_REQUESTED, handleGetUsers);
}

function* postSaga() {
	yield takeEvery(GET_POSTS_REQUESTED, handleGetPosts);
}

export function* watcherSaga() {
	yield all([fork(postSaga), fork(userSaga)]);
}
