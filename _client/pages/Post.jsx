import React, { Component } from "react";
import BoardMessage from "../components/BoardMessage";

class Post extends Component {
	state = {};
	render() {
		return (
			<div className="main">
				<div className="post-container">
					<h1>This is a board message title</h1>
					<BoardMessage />
					<h2>POST RELATED COMMAND PANNEL HERE</h2>
					<BoardMessage />
					<BoardMessage />
					<BoardMessage />
					<BoardMessage />
					<h2>Post a new replay</h2>
					<BoardMessage edit new />
				</div>
			</div>
		);
	}
}

export default Post;
