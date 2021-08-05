import { call, put } from "redux-saga/effects";
import { requestGetPosts } from "../requests/posts";

export function* handleGetPosts() {
	try {
		const posts = yield call(requestGetPosts);
		yield put({ type: "GET_POSTS_SUCCESS", posts: posts });
	} catch (error) {
		yield put({ type: "GET_POSTS_FAILED", message: error.message });
	}
}
