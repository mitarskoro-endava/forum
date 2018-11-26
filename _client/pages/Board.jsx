import React, { Component } from "react";
import "../css/Board.css";

import BoardTrack from "../components/BoardTrack";
import PostTrack from "../components/PostTrack";

class Board extends Component {
	state = {};
	render() {
		return (
			<div className="main">
				<div className="board-container">
					<h1>Specific Board Title</h1>
					<h2>Subboards</h2>
					<BoardTrack />
					<BoardTrack />
					<BoardTrack />
					<h2>Posts</h2>
					<PostTrack />
					<PostTrack />
					<PostTrack />
					<PostTrack />
					<PostTrack />
					<PostTrack />
					<PostTrack />
					<PostTrack />
					<PostTrack />
				</div>
			</div>
		);
	}
}

export default Board;
