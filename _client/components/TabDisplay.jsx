import React, { Component } from "react";
import "../css/TabDisplay.css";

class TabDisplay extends Component {
	state = {
		activeTab: 0
	};
	constructor(props) {
		super(props);
		this.tabs =
			this.props.children.length > 1 &&
			React.Children.map(this.props.children, (child, i) => (
				<a href="" className="tab-nav" onClick={e => this.switchTo(e, i)}>
					{child.props.tab}
				</a>
			));
		this.switchTo = (e, index) => {
			e.preventDefault();
			e.stopPropagation();
			this.setState({
				activeTab: index
			});
		};
	}
	render() {
		if (!this.tabs) {
			return this.props.children;
		} else
			return (
				<React.Fragment>
					<div className="tab-navs">
						{this.tabs.map((tab, index) =>
							React.cloneElement(tab, {
								"ms-tab-state":
									index === this.state.activeTab ? "active" : undefined
							})
						)}
					</div>
					<div className="tabs">
						{this.props.children.map((child, index) => {
							return this.state.activeTab === index ? child : undefined;
						})}
					</div>
				</React.Fragment>
			);
	}
}
export default TabDisplay;
