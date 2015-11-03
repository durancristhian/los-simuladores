var names = require("./names.json");
var uniqueRandomArray = require("unique-random-array");
var getRandomItem = uniqueRandomArray(names);

function random (number) {

	if(number === undefined) {

		return getRandomItem();
	} else {

		var randomItems = [];
		for (var i = 0; i < number; i++) {

			randomItems.push(getRandomItem());
		};

		return randomItems;
	}
}

module.exports = {
	all: names,
	random: random
};