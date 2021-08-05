import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<header className="header sticky-top">
			<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
				<div className="container">
					<a className="navbar-brand" href="#">
						<strong className="h6 mb-0 font-weight-bold text-uppercase">
							Saaspect
						</strong>
					</a>
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item active">
								<NavLink className="nav-link" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="btn btn-primary ms-3" to="/add-post">
									Add Post
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
export default NavBar;
