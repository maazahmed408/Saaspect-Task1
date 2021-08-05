import { call, put } from "redux-saga/effects";
import { requestGetComments } from "../requests/comments";

export function* handleGetComments(action) {
	try {
		const comments = yield call(requestGetComments, action.payload);

		yield put({ type: "GET_COMMENTS_SUCCESS", comments: comments });
	} catch (error) {
		yield put({ type: "GET_COMMENTS_FAILED", message: error.message });
	}
}
