const path = require("path");
const express = require("express");
const router = require("./routes");

//	Instantiate an App
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../_client/static/")));
app.get("/favicon.png", (req, res) => {
	//@TODO: server a proper file
	res
		.type("png")
		.status(404)
		.send();
});
app.use("/", router);

//  Initialize a DB connection
const db = require("./db/connection");

module.exports = app;
