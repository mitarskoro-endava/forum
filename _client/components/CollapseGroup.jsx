import React, { Component } from "react";
import Collapse from "./Collapse";

class CollapseGroup extends Component {
	constructor(props) {
		super(props);
		let allCollapsed = true;
		this.state = {
			collapsed: React.Children.map(this.props.children, child =>
				child.props.collapsed || !allCollapsed ? true : (allCollapsed = false)
			)
		};
		console.log(allCollapsed);
	}
	render() {
		console.log("state: ", this.state);
		return (
			<React.Fragment>{this.generateControlledCollapses()}</React.Fragment>
		);
	}
	generateControlledCollapses = () =>
		React.Children.map(this.props.children, (child, index) =>
			React.cloneElement(child, {
				collapsed: this.state.collapsed[index],
				toggleCollapse: e => {
					this.toggleCollapse(e, index);
				}
			})
		);

	toggleCollapse = (e, index) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			collapsed: this.state.collapsed.map((e, i) => (index === i ? !e : true))
		});
	};
}

CollapseGroup.propTypes = {
	children: (props, propName, componentName) => {
		const children = props[propName];
		let error = null;
		React.Children.forEach(children, function(child) {
			if (child.type !== Collapse) {
				error = new Error(
					"`" + componentName + "`'s children should be of type `Collapse`."
				);
			}
		});
		return error;
	}
};

export default CollapseGroup;
