const { Router } = require("express");

const router = Router();

router.get("/*", (req, res) => {
	const path = req.path.toLowerCase().replace(/^\/+|\/+$/g, "");
	res.status(200).json({ path });
});

module.exports = router;
