import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { getComments, getPostDetail } from "../redux/action/action";

const PostDetail = ({ state, postDetailState, getComments, getPostDetail }) => {
	const { comments } = state;
	const { postId } = useParams();
	const { post, loading } = postDetailState;

	useEffect(() => {
		getPostDetail(postId);
		getComments(postId);
	}, []);

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
			{state.loading ? (
				<p>Loading comments...</p>
			) : (
				<ul className="mt-3">
					{comments.map((comment) => (
						<li key={comment.id}>
							<p>{comment.email}</p>
							<p>{comment.body}</p>
							<hr />
						</li>
					))}
				</ul>
			)}
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

	getComments: (id) => {
		dispatch(getComments(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
