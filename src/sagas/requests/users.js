import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

export const requestGetUsers = () => {
	return axios
		.get(url)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};

export const requestGetUserProfile = (id) => {
	return axios
		.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};
