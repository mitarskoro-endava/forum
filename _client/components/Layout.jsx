import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../css/Layout.css";

import UserPanel from "./UserPanel";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Boards from "../pages/Boards";

class Pages extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<UserPanel />
					<div className="header" />
					<div className="content">
						<Switch>
							<Route path="/signup" exact component={SignUp} />
							<Route path="/profile" exact component={Profile} />
							<Route path="/profile/:id" exact component={Profile} />
							<Route path="/boards" exact component={Boards} />
						</Switch>
					</div>
					<div className="footer" />
				</div>

				{false && (
					<Switch>
						<Route path="/" exact component={LandingPage} />
						<Route path="/boards/:id" exact component={Board} />
						<Route path="/boards/:id/new" exact component={Post} />
						<Route path="/posts/:id" exact component={Post} />
						<Route path="/admin" exact component={Admin} />
						<Route path="/admin/boards" exact component={AdminBoards} />
						<Route path="/admin/boards/new" exact component={BoardEdit} />
						<Route path="/admin/boards/:id" exact component={BoardEdit} />
						<Route path="/admin/groups" exact component={UserGroupsList} />
						<Route path="/admin/group/new" exact component={UserGroup} />
						<Route path="/admin/group/:id" exact component={UserGroup} />
						<Route path="/admin/users" exact component={UserList} />
						<Route path="/admin/issues" exact component={Issues} />
					</Switch>
				)}
			</React.Fragment>
		);
	}
}

export default Pages;
