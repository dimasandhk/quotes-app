const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
	`mongodb://dimas:${process.env.PASS}@cluster0-shard-00-00.t2x83.mongodb.net:27017,cluster0-shard-00-01.t2x83.mongodb.net:27017,cluster0-shard-00-02.t2x83.mongodb.net:27017/quote-api?ssl=true&replicaSet=atlas-rs5qbf-shard-0&authSource=admin&retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true
	},
	(err) => {
		if (err) return console.log(err);
		console.log("Mongoose Connected");
	}
);
