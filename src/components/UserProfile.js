import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./userProfile.css";

import { getUserProfile } from "../redux/action/action";

const UserProfile = ({ getUserProfile, userProfileState }) => {
	const { userProfile, loading } = userProfileState;
	const { userId } = useParams();

	useEffect(() => {
		getUserProfile(userId);
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="container emp-profile">
			<form method="post">
				<div className="row">
					<div className="col-md-4">
						<div className="profile-img">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
								alt=""
							/>
						</div>
					</div>
					<div className="col-md-6">
						<h5>{userProfile.name}</h5>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-8">
						<div className="tab-content profile-tab" id="myTabContent">
							<div className="row">
								<div className="col-md-6">
									<label>User Id</label>
								</div>
								<div className="col-md-6">
									<p>{userProfile.username}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<label>Name</label>
								</div>
								<div className="col-md-6">
									<p>{userProfile.name}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<label>Email</label>
								</div>
								<div className="col-md-6">
									<p>{userProfile.email}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<label>Phone</label>
								</div>
								<div className="col-md-6">
									<p>{userProfile.phone}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<label>Company</label>
								</div>
								<div className="col-md-6">
									<p>{userProfile.company?.name}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userProfileState: state.userProfileReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getUserProfile: (id) => {
		dispatch(getUserProfile(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
