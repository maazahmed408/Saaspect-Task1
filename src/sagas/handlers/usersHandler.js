import { call, put } from "redux-saga/effects";
import { requestGetUsers } from "../requests/users";

export function* handleGetUsers() {
	try {
		const users = yield call(requestGetUsers);
		yield put({ type: "GET_USERS_SUCCESS", users: users });
	} catch (error) {
		yield put({ type: "GET_USERS_FAILED", message: error.message });
	}
}
