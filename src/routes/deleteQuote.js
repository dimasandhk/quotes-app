const router = require("express").Router();

// Model
const Quote = require("../models/Quote");

router.delete("/quote", async (req, res) => {
	const { id } = req.query;

	if (Object.keys(req.query).length >= 2 || !id)
		return res.status(500).send({
			message: "Query must be only id"
		});

	try {
		const deleted = await Quote.findByIdAndDelete(id);
		if (!deleted) return res.status(404).send({ message: `Quote with id ${id} not found` });

		res.send(deleted);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
