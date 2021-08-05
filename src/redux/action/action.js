import {
	SET_CURRENT_PAGE,
	SET_LOADING,
	GET_POSTS_REQUESTED,
	SET_POST,
	SET_COMMENTS,
	GET_USERS_REQUESTED,
} from "./action-type";

export const getPosts = () => ({
	type: GET_POSTS_REQUESTED,
});

export const getUsers = () => ({
	type: GET_USERS_REQUESTED,
});

export const setCurrentPage = (pageNumber) => ({
	type: SET_CURRENT_PAGE,
	payload: pageNumber,
});
export const setLoading = (value) => ({
	type: SET_LOADING,
	payload: value,
});

export const setPost = (post) => ({
	type: SET_POST,
	payload: post,
});
export const setComments = (comments) => ({
	type: SET_COMMENTS,
	payload: comments,
});
