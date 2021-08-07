import { call, put } from "redux-saga/effects";
import { requestGetUsers } from "../requests/users";
import { requestGetUserProfile } from "../requests/users";

export function* handleGetUsers() {
	try {
		const users = yield call(requestGetUsers);
		yield put({ type: "GET_USERS_SUCCESS", users: users });
	} catch (error) {
		yield put({ type: "GET_USERS_FAILED", message: error.message });
	}
}
export function* handleGetUserProfile(action) {
	try {
		const userProfile = yield call(requestGetUserProfile, action.payload);
		yield put({ type: "GET_USER_PROFILE_SUCCESS", userProfile: userProfile });
	} catch (error) {
		yield put({ type: "GET_USER_PROFILE_FAILED", message: error.message });
	}
}
