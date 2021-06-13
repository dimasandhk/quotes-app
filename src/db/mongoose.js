const mongoose = require("mongoose");

mongoose.connect(
	"mongodb://127.0.0.1:27017/quotes-api",
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
