import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import {
	getComments,
	getPostDetail,
	getUserProfile,
} from "../redux/action/action";

const PostDetail = ({
	state,
	postDetailState,
	getComments,
	getPostDetail,
	userProfileState,
	getUserProfile,
}) => {
	const { comments } = state;
	const { postId } = useParams();
	const { post, loading } = postDetailState;
	const { userProfile } = userProfileState;
	console.log(userProfile);

	useEffect(() => {
		getPostDetail(postId);
		getComments(postId);
		getUserProfile(post.userId);
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
			<NavLink to={`/users/${post.userId}`}>
				<p>@{userProfile.username}</p>
			</NavLink>
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
	userProfileState: state.userProfileReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getPostDetail: (id) => {
		dispatch(getPostDetail(id));
	},

	getComments: (id) => {
		dispatch(getComments(id));
	},

	getUserProfile: (id) => {
		dispatch(getUserProfile(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
