import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPost = () => {
	const [details, setDetails] = useState({
		title: "",
		body: "",
	});

	const handleChange = (name) => (event) => {
		setDetails({ ...details, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (!details.title || !details.body) {
			return toast.warning("please provide all info");
		}
		sendPost()
			.then(toast.success("Post Uploaded"))
			.catch((err) => toast.warning("Post Failded to Upload"));

		setDetails({
			title: "",
			body: "",
		});
	};

	const sendPost = () => {
		return axios.post("https://jsonplaceholder.typicode.com/posts", {
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(details),
		});
	};

	console.log(details);

	return (
		<div className="mx-auto mt-5" style={{ width: "500px" }}>
			<h1 className="text-center mb-5">Add New Post</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="title" className="form-label fs-3">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						value={details.title}
						onChange={handleChange("title")}
					></input>
					<label htmlFor="body" className="form-label fs-3 mt-4">
						Body
					</label>
					<textarea
						class="form-control"
						rows="8"
						value={details.body}
						onChange={handleChange("body")}
					></textarea>
					<button type="submit" class="btn btn-primary mt-5" onClick={onSubmit}>
						Submit
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default AddPost;
