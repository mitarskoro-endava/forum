import React, { Component } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";

import Layout from "./components/Layout";
import DevNav from "./components/DevNav";

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<DevNav />
				<Route path="/" component={Layout} />
			</React.Fragment>
		);
	}
}

ReactDom.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app")
);
