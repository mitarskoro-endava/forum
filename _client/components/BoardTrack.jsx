import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/BoardTrack.css";

class BoardTrack extends Component {
	render() {
		return (
			<div className="board-track">
				<span className="icon">
					<img src="" alt="IMG" />
				</span>
				<span className="title">
					<NavLink to="/boards/300">
						Board Title is really long and i want the dots
					</NavLink>
				</span>
				<span className="post-count">#</span>
				<span className="last-post">
					<label>Last post:</label>
					<span>How do i do stuff</span>
				</span>
				<span className="comment-by">
					<label>Last comment by:</label>
					<span>Awesome helper dude</span>
				</span>
				<span className="started-by">
					<label>Started by:</label>
					<span>new questioneer name that choose a long name</span>
				</span>
			</div>
		);
	}
}

export default BoardTrack;
