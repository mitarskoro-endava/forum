import React, { Component } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";

import Example from "./components/Example";

class App extends Component {
	state = {};
	render() {
		return <Route path="/" component={Example} />;
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
