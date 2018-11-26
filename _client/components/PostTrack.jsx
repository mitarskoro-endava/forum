import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/PostTrack.css";

class PostTrack extends Component {
	state = {};
	render() {
		return (
			<div className="post-track">
				<span className="icon">
					<img src="" alt="IMG" />
				</span>
				<span className="title">
					<NavLink to="/posts/400">
						Post title of the post of title of post
					</NavLink>
				</span>
				<span className="counter-display">
					<span>Views: ####</span>
					<span>Replies: ###</span>
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

export default PostTrack;
