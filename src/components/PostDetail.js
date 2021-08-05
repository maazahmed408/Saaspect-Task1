import React, { useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { setComments, getPostDetail } from "../redux/action/action";

const PostDetail = ({ state, postDetailState, setComments, getPostDetail }) => {
	const { comments } = state;
	const { postId } = useParams();
	const { post, loading } = postDetailState;

	useEffect(() => {
		getPostDetail(postId);
		fetchComment();
	}, []);

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
	postDetailState: state.postDetailReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getPostDetail: (id) => {
		dispatch(getPostDetail(id));
	},

	setComments: (comments) => {
		dispatch(setComments(comments));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
