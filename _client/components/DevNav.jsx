import React, { Component } from "react";
import "../css/DevNav.css";

import { NavLink } from "react-router-dom";

class DevNav extends Component {
	render() {
		return (
			<div className="DevNavContainer">
				<div className="Pages">
					<span>Pages:</span>
					<NavLink to="/" exact>
						Root
					</NavLink>
					<NavLink to="/signup" exact>
						Signup
					</NavLink>
					<NavLink to="/profile" exact>
						Profile
					</NavLink>
					<NavLink to="/profile/200" exact>
						Profile/ID
					</NavLink>
					<NavLink to="/boards" exact>
						Boards
					</NavLink>
					<NavLink to="/boards/300" exact>
						Boards/ID
					</NavLink>
					<NavLink to="/boards/300/new" exact>
						New post
					</NavLink>
					<NavLink to="/posts/400" exact>
						Post/ID
					</NavLink>
					<NavLink to="/admin" exact>
						Admin panel
					</NavLink>
					<NavLink to="/admin/boards" exact>
						Manage boards
					</NavLink>
					<NavLink to="/admin/boards/new" exact>
						New board
					</NavLink>
					<NavLink to="/admin/boards/:id" exact>
						Admin board/ID
					</NavLink>
					<NavLink to="/admin/groups" exact>
						Manage groups
					</NavLink>
					<NavLink to="/admin/group/new" exact>
						New group
					</NavLink>
					<NavLink to="/admin/group/:id" exact>
						Admin group/ID
					</NavLink>
					<NavLink to="/admin/users" exact>
						Manage users
					</NavLink>
					<NavLink to="/admin/issues" exact>
						Issues
					</NavLink>
				</div>
			</div>
		);
	}
}

export default DevNav;
