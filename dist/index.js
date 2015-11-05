"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _namesJson = require("./names.json");

var _namesJson2 = _interopRequireDefault(_namesJson);

var _uniqueRandomArray = require("unique-random-array");

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var getRandomItem = (0, _uniqueRandomArray2["default"])(_namesJson2["default"]);

function random(number) {

	if (number === undefined) {

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
	all: _namesJson2["default"],
	random: random
};
