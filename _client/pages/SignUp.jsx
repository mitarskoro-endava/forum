import React, { Component } from "react";
import LabeledComponent from "../components/LabeledComponent";
import { Redirect } from "react-router-dom";
//import "../css/SignUp.css";

import { connect } from "react-redux";

@connect(
	store => {
		return { logged: false };
	},
	{}
)
class SignUpForm extends Component {
	render() {
		if (this.props.logged) {
			return <Redirect to="/" />;
		} else
			return (
				<div className="main">
					<form className="signup-form">
						<h1>Sign Up</h1>
						<LabeledComponent
							type="email"
							label="E-mail:"
							placeholder="example.john@email.com"
							required
						/>
						<LabeledComponent type="password" label="Password:" required />
						<LabeledComponent
							type="text"
							label="User Name:"
							placeholder="example: John123, SuperMike"
							required
						/>
						<LabeledComponent type="text" label="First Name:" />
						<LabeledComponent type="text" label="Last Name:" />
						<button>Sign Up</button>
					</form>
				</div>
			);
	}
}

export default SignUpForm;
