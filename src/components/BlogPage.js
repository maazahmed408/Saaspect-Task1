import React, { useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

import { connect } from "react-redux";
import { setCurrentPage, getPosts } from "../redux/action/action";

const BlogPage = ({ setCurrentPage, blogState, getPosts, postsState }) => {
	const { currentPage, postsPerPage } = blogState;
	const { posts, loading } = postsState;

	useEffect(() => {
		getPosts();
	}, []);

	//Get Current Posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	//Change Page Number
	const paginate = (pageNumber) => {
		window.scrollTo(0, 0);
		setCurrentPage(pageNumber);
	};
	if (loading) {
		return <h1>Loading.....</h1>;
	}
	return (
		<div className="container mt-5">
			<h1 className="text-primary mb-3">My Blog</h1>
			<Posts posts={currentPosts} />
			<Pagination totalPosts={posts.length} paginate={paginate} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	postsState: state.allPostsReducer,
	blogState: state.blogReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getPosts: () => {
		dispatch(getPosts());
	},
	setCurrentPage: (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
