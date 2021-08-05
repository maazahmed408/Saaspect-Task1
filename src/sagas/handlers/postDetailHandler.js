import { call, put } from "redux-saga/effects";
import { requestGetPostDetail } from "../requests/postDetail";

export function* handleGetPostDetail(action) {
	try {
		const post = yield call(requestGetPostDetail, action.payload);

		yield put({ type: "GET_POST_DETAIL_SUCCESS", post: post });
	} catch (error) {
		yield put({ type: "GET_POST_DETAIL_FAILED", message: error.message });
	}
}
