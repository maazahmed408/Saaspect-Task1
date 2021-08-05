import { GET_POSTS_REQUESTED } from "../action/action-type";

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_REQUESTED:
			return { ...state, loading: true };
		case "GET_POSTS_SUCCESS":
			return { ...state, loading: false, posts: action.posts };
		case "GET_POSTS_FAILED":
			return { ...state, loading: false, error: action.message };

		default:
			return state;
	}
};
