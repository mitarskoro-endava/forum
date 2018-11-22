import React, { Component } from "react";
import LabeledComponent from "../components/LabeledComponent";
import { Redirect } from "react-router-dom";
import "../css/Profile.css";

import { connect } from "react-redux";

import TabDisplay from "../components/TabDisplay";

class SignUpForm extends Component {
	render() {
		return (
			<div className="main">
				<div className="profile-container">
					<div>
						<img src="" alt="profile picture" />
						<span>Status:</span>
						<span>Posts:</span>
						<span>Comments:</span>
						<span>Reputation:</span>
					</div>
					<div>
						<div className="controls">Profile Controls div</div>
						<h1>Name</h1>
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
}

export default SignUpForm;
