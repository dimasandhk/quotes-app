const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const rateLimit = require("express-rate-limit");

// Connect Mongoose
const initConnection = require("./db/mongoose");
initConnection(function () {
	launchServer();
});

function launchServer() {
	// Configurations
	app.use(express.json());
	const port = process.env.PORT || 3000;
	require("dotenv").config();

	// Handle Delete Method Permission
	app.use(async (req, res, next) => {
		if (req.method === "POST") {
			const { authorization } = req.headers;

			if (!authorization) return res.status(401).send({ message: "Authorization Required" });

			const isAuthorized = await bcrypt.compare(process.env.B64PASS, authorization.split(" ")[1]);
			if (!isAuthorized) return res.status(401).send({ message: "Wrong Auth Token" });

			return next();
		}

		if (req.method === "DELETE") {
			if (!req.query.admin)
				return res.status(401).send({
					message: "DELETE Method only available for admin",
					status: 401
				});

			if (req.query.admin !== process.env.ADMIN_PASS)
				return res.status(401).send({
					message: "Wrong Auth Token",
					status: 401
				});

			return next();
		}

		next();
	});

	// Handle Maintenance
	// app.use((req, res, next) => {
	// 	res.status(503).send({ message: "Server Under Maintenance" });
	// });

	app.set("trust proxy", 1);
	app.use(
		"/api/post/quote",
		rateLimit({
			windowMs: 24 * 60 * 60 * 1000, // 24 Hours
			max: 5,
			message: "You have created too many quote, please try again later"
		})
	);

	app.use("/api/post", require("./routes/newQuote")); // New Quote
	app.use("/api", require("./routes/getAllQuote")); // Get All Quote
	app.use("/api", require("./routes/deleteQuote")); // Delete Quote

	if (process.env.NODE_ENV === "production") {
		app.use(express.static(`${__dirname}/public/`));
		app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`));
	}

	app.listen(port, () => console.log(`Up on http://localhost:${port}`));
}
