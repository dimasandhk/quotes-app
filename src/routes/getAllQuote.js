const router = require("express").Router();

// Models
const Quote = require("../models/Quote");

router.get("/quote", async (req, res) => {
	const allQuote = await Quote.find({});

	if (!allQuote.length)
		return res.status(200).send({ message: "Quote Collections are still empty", data: allQuote });

	res.status(200).send(allQuote);
});

module.exports = router;
