import {
	SET_LOADING,
	SET_CURRENT_PAGE,
	SET_POST,
	SET_COMMENTS,
} from "../action/action-type";

const initialState = {
	loading: false,
	currentPage: 1,
	postsPerPage: 10,
	comments: [],
	post: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload };

		case SET_POST:
			return { ...state, post: action.payload };

		case SET_COMMENTS:
			return { ...state, comments: action.payload };

		default:
			return state;
	}
};
