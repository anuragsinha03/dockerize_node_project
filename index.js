const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/home", (req, res) => {
	return res.json({
		message: "OK",
	});
});

app.listen(PORT, () => {
	console.log(`Server is now running at PORT: ${PORT}`);
});
