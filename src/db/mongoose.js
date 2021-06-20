const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function initConnection(callback) {
	mongoose.connect(
		`mongodb://dimas:${process.env.PASS}@cluster0-shard-00-00.t2x83.mongodb.net:27017,cluster0-shard-00-01.t2x83.mongodb.net:27017,cluster0-shard-00-02.t2x83.mongodb.net:27017/quote-api?ssl=true&replicaSet=atlas-rs5qbf-shard-0&authSource=admin&retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true
		}
	);
	const db = mongoose.connection;
	db.on("error", function (err) {
		console.error(err);
		process.exit(1);
	});
	db.once("open", function () {
		console.log("Connected to database");
		callback();
	});
};
