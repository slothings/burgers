// dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// get request
router.get("/", function (req, res) {
	burger.selectAll(function (data) {
		const burgerData = {
			burgers: data
		};

		res.render("index", burgerData);
	});
});

// post request
router.post("/api/burgers", function (req, res) {
	burger.insertOne(req.body, function (result) {
		res.json({ id: result.insertId });
	});
});

// put request
router.put("/api/burgers/:id", function (req, res) {
	let condition;
	burger.updateOne(condition, req.params.id, function (result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// export
module.exports = router;