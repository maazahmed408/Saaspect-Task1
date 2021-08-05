import axios from "axios";

export const requestGetPostDetail = (id) => {
	return axios
		.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};
