import names from "./names.json";
import uniqueRandomArray from "unique-random-array";
var getRandomItem = uniqueRandomArray(names);

module.exports = {
	all: names,
	random: function (number) {

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
};