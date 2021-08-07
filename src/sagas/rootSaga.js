import { takeEvery, all, fork } from "redux-saga/effects";
import {
	GET_POSTS_REQUESTED,
	GET_POST_DETAIL,
	GET_USERS_REQUESTED,
	GET_COMMENTS,
	GET_USER_PROFILE,
} from "../redux/action/action-type";
import { handleGetPosts } from "./handlers/postsHandler";
import { handleGetUsers, handleGetUserProfile } from "./handlers/usersHandler";
import { handleGetPostDetail } from "./handlers/postDetailHandler";
import { handleGetComments } from "./handlers/commentsHandler";

function* userSaga() {
	yield takeEvery(GET_USERS_REQUESTED, handleGetUsers);
}

function* postSaga() {
	yield takeEvery(GET_POSTS_REQUESTED, handleGetPosts);
}

function* postDetailSaga() {
	yield takeEvery(GET_POST_DETAIL, handleGetPostDetail);
}

function* getCommentsSaga() {
	yield takeEvery(GET_COMMENTS, handleGetComments);
}
function* getUserProfileSaga() {
	yield takeEvery(GET_USER_PROFILE, handleGetUserProfile);
}

export function* watcherSaga() {
	yield all([
		fork(postSaga),
		fork(userSaga),
		fork(postDetailSaga),
		fork(getCommentsSaga),
		fork(getUserProfileSaga),
	]);
}
