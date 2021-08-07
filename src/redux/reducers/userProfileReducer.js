import { GET_USER_PROFILE } from "../action/action-type";

const initialState = {
	userProfile: {},
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_PROFILE:
			return { ...state, loading: true };

		case "GET_USER_PROFILE_SUCCESS":
			return { ...state, loading: false, userProfile: action.userProfile };

		case "GET_USER_PROFILE_FAILED":
			return { ...state, loading: false, error: action.message };

		default:
			return state;
	}
};
