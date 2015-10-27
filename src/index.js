var names = require("./names.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
	all: names,
	random: uniqueRandomArray(names)
};