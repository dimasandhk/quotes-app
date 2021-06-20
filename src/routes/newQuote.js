const router = require("express").Router();

// Mongoose Models
const Quote = require("../models/Quote");

router.post("/quote", async (req, res) => {
	const newQuote = new Quote(req.body);

	try {
		await newQuote.save();
		res.status(201).send(await Quote.find());
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
