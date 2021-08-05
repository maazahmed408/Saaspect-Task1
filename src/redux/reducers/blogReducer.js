import { SET_CURRENT_PAGE, GET_COMMENTS } from "../action/action-type";

const initialState = {
	currentPage: 1,
	postsPerPage: 10,
	comments: [],
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			return { ...state, loading: true };

		case "GET_COMMENTS_SUCCESS":
			return { ...state, loading: false, comments: action.comments };

		case "GET_COMMENTS_FAILED":
			return { ...state, loading: false, error: action.message };

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload };

		default:
			return state;
	}
};
