const router = require("express").Router();

// Models
const Quote = require("../models/Quote");

router.get("/quote", async (req, res) => {
	const allQuote = await Quote.find({});
	res.status(200).send(allQuote);
});

module.exports = router;
