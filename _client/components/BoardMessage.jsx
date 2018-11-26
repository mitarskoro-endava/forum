import React, { Component } from "react";
import "../css/BoardMessage.css";

class BoardMessage extends Component {
	state = {};
	render() {
		return (
			<div className="board-message-container">
				{this.props.edit ? this.messageEdit() : this.messagePreview()}
			</div>
		);
	}
	messageEdit() {
		return <textarea />;
	}
	messagePreview() {
		return (
			<React.Fragment>
				<div className="owner">
					<img src="" alt="profile picture" />
					<h3>Name</h3>
					<span>Status:</span>
					<span>Posts:</span>
					<span>Comments:</span>
					<span>Reputation:</span>
				</div>
				<div className="body">
					<article>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						eu massa a eros auctor ultrices ac sit amet neque. Duis fringilla
						faucibus tincidunt. Mauris sollicitudin commodo nunc, a fermentum
						nisi eleifend eget. Ut mattis dapibus viverra. Sed metus nunc,
						maximus quis cursus non, tincidunt nec nisl. Maecenas ligula nisl,
						congue pretium facilisis non, faucibus eu mi. Nullam egestas aliquam
						ex, ac rhoncus massa. Nam quis est odio. Aenean lacinia viverra
						purus, vitae porttitor eros ornare vel. Vestibulum magna enim,
						finibus vel suscipit nec, iaculis id augue. Vivamus ut pellentesque
						ligula. Morbi nec ante sed purus pulvinar varius et vel diam.
					</article>
				</div>
			</React.Fragment>
		);
	}
}

export default BoardMessage;
