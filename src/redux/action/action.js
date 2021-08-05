import {
	SET_CURRENT_PAGE,
	GET_POSTS_REQUESTED,
	GET_COMMENTS,
	GET_USERS_REQUESTED,
	GET_POST_DETAIL,
} from "./action-type";

export const getPosts = () => ({
	type: GET_POSTS_REQUESTED,
});

export const getUsers = () => ({
	type: GET_USERS_REQUESTED,
});

export const getPostDetail = (postId) => ({
	type: GET_POST_DETAIL,
	payload: postId,
});

export const setCurrentPage = (pageNumber) => ({
	type: SET_CURRENT_PAGE,
	payload: pageNumber,
});

export const getComments = (id) => ({
	type: GET_COMMENTS,
	payload: id,
});
