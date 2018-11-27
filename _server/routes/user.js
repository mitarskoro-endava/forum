const { Router } = require("express");
const User = require("../db/models/User").model;
const mongoose = require("mongoose");

const router = Router();

router.get("/:id", (req, res) => {
	const path = req.path.toLowerCase().replace(/^\/+|\/+$/g, "");
	User.findOne({ _id: req.params.id })
		.select("-password")
		.exec((err, data) => {
			if (!err) {
				if (data) {
					res.status(200).send(data);
				} else
					res
						.status(404)
						.json({ error: { message: "The specified user does not exist." } });
			} else if (err instanceof mongoose.CastError) {
				res.status(400).json({ error: { message: "Invalid user ID." } });
			} else res.status(500).json({ error: { message: err } });
		});
});

module.exports = router;
