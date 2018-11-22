import React, { Component } from "react";
import "../css/LabeledComponent.css";

class LabeledComponent extends Component {
	state = {};
	render() {
		return (
			<div className="lc">
				<label ms-required={this.props.required && "true"}>
					{this.props.label}
				</label>
				<input
					type={this.props.type}
					required={this.props.required}
					default={this.props.default}
					value={this.props.value}
					placeholder={this.props.placeholder}
				/>
			</div>
		);
	}
}

export default LabeledComponent;
