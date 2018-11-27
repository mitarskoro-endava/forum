const { Router } = require("express");
const User = require("../db/models/User").model;

const router = Router();

router.post("/*", (req, res) => {
	const path = req.path.toLowerCase().replace(/^\/+|\/+$/g, "");
	if (!req.body.email || !req.body.password || !req.body.userName)
		res
			.status(400)
			.json({ error: { message: "Fill out the required fields." } });
	else
		User.findOne({ email: req.body.email }, (err, data) => {
			if (!err) {
				if (!data) {
					const { email, password, userName, firstName, lastName } = req.body;

					User({
						email,
						password,
						userName,
						firstName,
						lastName
					})
						.save()
						.then(data => {
							res.status(200).json(data);
						});
				} else
					res.status(400).json({
						error: { message: "A user with that email already exists." }
					});
			} else res.status(500).send();
		});
});

module.exports = router;
