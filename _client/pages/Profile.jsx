import React, { Component } from "react";
import LabeledComponent from "../components/LabeledComponent";
import { Redirect } from "react-router-dom";
import "../css/Profile.css";

import TabDisplay from "../components/TabDisplay";

import { connect } from "react-redux";
import {
	profileDataLoadingStarted,
	profileDataRetrieved
} from "../redux/actions/profile";

@connect(
	state => state.profile,
	{ profileDataRetrieved, profileDataLoadingStarted }
)
class SignUpForm extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="main">
				<div className="profile-container">
					<div>
						<img src={this.props.profileImg} alt="profile picture" />
						<span>Status: {this.props.status}</span>
						<span>Posts:</span>
						<span>Comments:</span>
						<span>Reputation: {this.props.reputation}</span>
					</div>
					<div>
						<div className="controls">Profile Controls div</div>
						<h1>{`${this.props.firstName} ${this.props.lastName}`}</h1>
						<p>Description</p>
						<TabDisplay>
							<div tab="Example1">Example of a tab.</div>
							<div tab="Example2">Example of a second tab with more text.</div>
						</TabDisplay>
					</div>
				</div>
			</div>
		);
	}
	fetchUserData = () => {
		fetch(`/api/user/${this.props.match.params.id}`)
			.then(res => res.json())
			.then(data => this.props.profileDataRetrieved(data));
	};
	componentDidMount = () => this.fetchUserData(true);
	componentDidUpdate = (prevProps, prevState) =>
		prevProps.match.params.id !== this.props.match.params.id &&
		this.fetchUserData();
	//shouldComponentUpdate = (prevProps, prevState) => prevProps.match.params.id !== this.props.match.params.id;
}

export default SignUpForm;
