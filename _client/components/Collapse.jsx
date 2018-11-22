import React, { Component } from "react";
import "../css/Collapse.css";

class Collapse extends Component {
	constructor(props) {
		super(props);
		this.state = { collapsed: this.props.collapsed || false, height: 0 };
		this.container = React.createRef();
		this.timerID = null;
		this.stateful =
			!this.props["no-collapse-bar"] && !this.props.toggleCollapse
				? true
				: false;
	}
	render() {
		return (
			<React.Fragment>
				{this.generateCollapseBar()}
				<div
					ref={this.container}
					className="collapse-box"
					ms-collapse-state={this.collapseState()}
					style={{ display: this.collapseState() && "none" }}
				>
					{this.props.children}
				</div>
			</React.Fragment>
		);
	}
	collapseState() {
		return (this.stateful && this.state.collapsed) || this.props.collapsed
			? "collapsed"
			: undefined;
	}
	generateCollapseBar() {
		if (!this.props["no-collapse-bar"]) {
			const collapseToggle = hook => {
				const titleWrapper = hook => {
					const img = hook => {
						const src = this.props.src;
						const alt = this.props.alt;
						const className = hook && hook.className;
						return <img src={src} alt={alt} className={className} />;
					};
					const title = hook => {
						const className = hook && hook.className;
						return <h2 className={className}>{this.props.title}</h2>;
					};
					const className = hook && hook.className;
					return (
						<div className={className}>
							{img(this.props.hooks && this.props.hooks.img)}
							{title(this.props.hooks && this.props.hooks.title)}
						</div>
					);
				};
				const className =
					hook && hook.className
						? "collapse-toggle " + hook.className
						: "collapse-toggle";
				return (
					<a
						href=""
						onClick={this.props.toggleCollapse || this.toggleCollapse}
						className={className}
						ms-collapse-state={this.collapseState()}
					>
						{titleWrapper(this.props.hooks && this.props.hooks.titleWrapper)}
					</a>
				);
			};
			return collapseToggle(this.props.hooks && this.props.hooks.toggle);
		}
	}
	toggleCollapse = e => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({ collapsed: !this.state.collapsed });
	};
	animateCollapse() {
		const element = this.container.current;
		let { transitionDuration } = window.getComputedStyle(element);
		transitionDuration = parseFloat(transitionDuration);
		const shouldCollapse = window.getComputedStyle(element).display === "none";
		element.style.removeProperty("display");

		if (shouldCollapse) {
			element.style.height = element.offsetHeight + "px";
			element.offsetHeight; //the most crucial line
			element.style.height = "0px";
			this.timerID && clearTimeout(this.timerID);
			this.timerID = window.setTimeout(function() {
				element.style.removeProperty("height");
				element.style.display = "none";
			}, transitionDuration * 1000);
		} else {
			let { display } = window.getComputedStyle(element);
			display = display === "none" ? "block" : display;
			element.style.display = display;
			element.style.removeProperty("height");
			const height = element.offsetHeight;
			element.style.height = "0px";
			element.offsetHeight; //the most crucial line
			element.style.height = height + "px";
			this.timerID && clearTimeout(this.timerID);
			this.timerID = window.setTimeout(function() {
				element.style.removeProperty("height");
			}, transitionDuration * 1000);
		}
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.animateCollapse();
	}
	shouldComponentUpdate(prevProps, prevState) {
		return this.stateful
			? prevState.collapsed !== this.state.collapsed
			: prevProps.collapsed !== this.props.collapsed;
	}
}

export default Collapse;
