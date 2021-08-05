import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";

export const requestGetPosts = () => {
	return axios
		.get(url)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};
