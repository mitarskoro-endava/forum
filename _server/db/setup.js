const User = require("./models/User").model;
const UserGroup = require("./models/UserGroup").model;
const db = require("./connection");

setTimeout(() => {
	const TestUser = User({
		email: "testuser@email.com",
		password: "test",
		accountName: "Test User",
		firstName: "Test",
		lastName: "User",
		status: "Offline",
		userGroups: []
	});
	TestUser.save();
}, 1000);
