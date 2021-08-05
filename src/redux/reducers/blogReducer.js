import { SET_CURRENT_PAGE, SET_COMMENTS } from "../action/action-type";

const initialState = {
	currentPage: 1,
	postsPerPage: 10,
	comments: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload };

		case SET_COMMENTS:
			return { ...state, comments: action.payload };

		default:
			return state;
	}
};
