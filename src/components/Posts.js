import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../redux/action/action";

const Posts = ({ state, posts, getUsers, usersState }) => {
	const { loading } = state;
	const { users } = usersState;
	// console.log(users.find((user) => user.id === 1).name);
	console.log(posts);

	useEffect(() => {
		getUsers();
	}, []);

	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<ul className="list-group mb-4">
			{posts.map((post) => (
				<li key={post.id} className="list-group-item">
					<Link to={`./posts/${post.id}`}>
						<h2>{post.title}</h2>
					</Link>
					<p>
						{post.body.length > 68
							? post.body.substring(0, 68) + "..."
							: post.body.substring(0, 68)}
					</p>
					<p className="font-weight-bold">
						By : {users.find((user) => user.id === post.userId)?.name}
					</p>
				</li>
			))}
		</ul>
	);
};
const mapStateToProps = (state) => ({
	state: state.blogReducer,
	usersState: state.usersReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getUsers: () => {
		dispatch(getUsers());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
