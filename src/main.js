const express = require("express");
const app = express();

// Connect Mongoose
require("./db/mongoose");

// Configurations
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(require("./routes/newQuote")); // New Quote

app.listen(port, () => console.log(`Up on http://localhost:${port}`));
