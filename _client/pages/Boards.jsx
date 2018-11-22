import React, { Component } from "react";
import Collapse from "../components/Collapse";
import CollapseGroup from "../components/CollapseGroup";

class Boards extends Component {
	state = { 1: true, 0: true };
	toggle = (e, index) => {
		e.preventDefault();
		e.stopPropagation();
		console.log("parent collapse triggered");
		this.setState(
			Object.assign({ 1: true, 0: true }, { [index]: !this.state[index] })
		);
	};
	render() {
		return (
			<div className="main">
				<div className="boards-container">
					<h1>Boards</h1>
					<React.Fragment>
						<CollapseGroup>
							<Collapse
								collapsed
								title="Collapse Bar Title"
								src="IMG"
								alt="some image"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus porttitor eget lectus vel facilisis. Nulla cursus
								viverra magna in aliquam. Maecenas ac laoreet metus. Integer
								iaculis dui sodales cursus tristique. Orci varius natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus. Proin ut scelerisque ligula, non elementum dui. Vivamus
								tempor venenatis est in ultricies. Donec non mi ac justo
								hendrerit maximus vitae at lectus. Curabitur vitae dolor
								ultricies, luctus enim eget, luctus sapien. Praesent vehicula,
								velit ut tempor pulvinar, ante tellus imperdiet justo, in rutrum
								lorem tortor eleifend nisi.
							</Collapse>
							<Collapse title="Collapse Bar Title 2" src="IMG" alt="some image">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus porttitor eget lectus vel facilisis. Nulla cursus
								viverra magna in aliquam. Maecenas ac laoreet metus. Integer
								iaculis dui sodales cursus tristique. Orci varius natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus. Proin ut scelerisque ligula, non elementum dui. Vivamus
								tempor venenatis est in ultricies. Donec non mi ac justo
								hendrerit maximus vitae at lectus. Curabitur vitae dolor
								ultricies, luctus enim eget, luctus sapien. Praesent vehicula,
								velit ut tempor pulvinar, ante tellus imperdiet justo, in rutrum
								lorem tortor eleifend nisi.
							</Collapse>
							<Collapse title="Collapse Bar Title 3" src="IMG" alt="some image">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus porttitor eget lectus vel facilisis. Nulla cursus
								viverra magna in aliquam. Maecenas ac laoreet metus. Integer
								iaculis dui sodales cursus tristique. Orci varius natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus. Proin ut scelerisque ligula, non elementum dui. Vivamus
								tempor venenatis est in ultricies. Donec non mi ac justo
								hendrerit maximus vitae at lectus. Curabitur vitae dolor
								ultricies, luctus enim eget, luctus sapien. Praesent vehicula,
								velit ut tempor pulvinar, ante tellus imperdiet justo, in rutrum
								lorem tortor eleifend nisi.
							</Collapse>
						</CollapseGroup>
					</React.Fragment>
				</div>
			</div>
		);
	}
}

export default Boards;
