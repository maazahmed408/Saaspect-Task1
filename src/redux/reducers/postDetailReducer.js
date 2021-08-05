import { GET_POST_DETAIL } from "../action/action-type";

const initialState = {
	post: {},
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POST_DETAIL:
			return { ...state, loading: true };
		case "GET_POST_DETAIL_SUCCESS":
			return { ...state, loading: false, post: action.post };
		case "GET_POST_DETAIL_FAILED":
			return { ...state, loading: false, error: action.message };

		default:
			return state;
	}
};
