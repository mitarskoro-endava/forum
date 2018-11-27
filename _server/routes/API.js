const { Router } = require("express");

const router = Router();
const signup = require("./signup");
const login = require("./login");
const user = require("./user");

router.use("/signup", signup);
router.use("/login", login);
router.use("/user", user);

router.get("/*", (req, res) => {
	const path = req.path.toLowerCase().replace(/^\/+|\/+$/g, "");
	res.status(200).json({ path });
});

module.exports = router;
