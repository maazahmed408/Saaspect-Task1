import axios from "axios";

export const requestGetComments = (id) => {
	return axios
		.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};
