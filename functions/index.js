const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);
// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Received for this amount >>> ", total);
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total), //subunits of the currency
			currency: "usd",
		});

		// Ok -created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		response.status(500).send("something went wrong!");
	}
});
app.listen(5500, (err) => {
	if (!err) {
		console.log(`listening on port 5500`);
	}
});
// Listen command
// exports.api = functions.https.onRequest(app);
// I stop on 1.18 video  there is a browser error I have to solve the error //
// this one is api key(baseurl)  http://127.0.0.1:5001/project-207b1/us-central1/api
