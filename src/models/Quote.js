const mongoose = require("mongoose");

const Quote = mongoose.model("Quote", {
	quote: { type: String, required: true }
});

module.exports = Quote;
