import React, { Component } from "react";
import "../css/Example.css";

//      REDUX CONNECTION
import { connect } from "react-redux";
import { exampleAction } from "../redux/actions/example";
@connect(
	store => store.example,
	{ onClick: exampleAction }
)
class Message extends Component {
	render() {
		return (
			<React.Fragment>
				<h3>{this.props.message}</h3>
				{this.props.button && (
					<button
						className={"confirmSatisfaction"}
						onClick={this.props.onClick}
					>
						I sure will!
					</button>
				)}
			</React.Fragment>
		);
	}
}

export default Message;
