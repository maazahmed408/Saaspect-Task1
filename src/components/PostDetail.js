import React, { useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { setPost, setLoading, setComments } from "../redux/action/action";

const PostDetail = ({ setPost, state, setLoading, setComments }) => {
	const { post, loading, comments } = state;
	const { postId } = useParams();

	useEffect(() => {
		fetchPost();
		fetchComment();
	}, []);

	const fetchPost = async () => {
		setLoading(true);
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
		const { data } = await response;
		setPost(data);
		setLoading(false);
	};

	const fetchComment = async () => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
		);
		const { data } = await response;
		setComments(data);
	};

	if (loading) {
		return <h1>Loading....</h1>;
	}
	return (
		<div className="container mt-5">
			<h1
				className="text-primary mb-3 text-center"
				style={{ fontSize: "48px" }}
			>
				{post.title}
			</h1>
			<p className="text-center" style={{ fontSize: "24px" }}>
				{post.body}
			</p>
			<hr />
			<h2 className="mt-5">Comments</h2>
			<ul className="mt-3">
				{comments.map((comment) => (
					<li key={comment.id}>
						<p>{comment.email}</p>
						<p>{comment.body}</p>
						<hr />
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	state: state.blogReducer,
});

const mapDispatchToProps = (dispatch) => ({
	setPost: (post) => {
		dispatch(setPost(post));
	},
	setComments: (comments) => {
		dispatch(setComments(comments));
	},
	setLoading: (value) => {
		dispatch(setLoading(value));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
