const { Router } = require("express");
const User = require("../db/models/User").model;

const router = Router();

router.post("/*", (req, res) => {
	//const path = req.path.toLowerCase().replace(/^\/+|\/+$/g, "");
	if (req.session.userID) {
		console.log("usao tu");
		res.status(200).json({ message: "Already logged in." });
	} else if (!req.body.email || !req.body.password)
		res
			.status(400)
			.json({ error: { message: "Fill out the required fields." } });
	else
		User.findOne({ email: req.body.email }, (err, data) => {
			if (!err) {
				if (data) {
					if (data.password === req.body.password) {
						data.status = "Online";
						data.save().then(saved => {
							req.session.userID = saved._id;
							res.status(200).json({ message: "Log in successful." });
						});
					} else
						res.status(400).json({
							error: { message: "Incorrect password." }
						});
				} else
					res.status(400).json({
						error: { message: "The email address is not registered." }
					});
			} else res.status(500).json(err);
		});
});

module.exports = router;
