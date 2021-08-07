import React from "react";
import { connect } from "react-redux";

const Pagination = ({ state, totalPosts, paginate }) => {
	const { postsPerPage } = state;
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); ++i) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<button className="page-link" onClick={() => paginate(number)}>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	state: state.blogReducer,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
