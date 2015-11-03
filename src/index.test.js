var expect = require("chai").expect;
var names = require("./index");

describe("Los Simuladores", function () {

	describe("all", function () {

		it("should be an array of strings", function () {

			expect(names.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings (array) {

				return array.every(function (item) {

					return typeof item === "string";
				});
			}
		});

		it("should countain 'Mario Santos'", function () {

			expect(names.all).to.include("Mario Santos");
		});
	});

	describe("random", function () {

		it("should return a random item from names.all", function () {

			var randomItem = names.random();
			expect(names.all).to.contain(randomItem);
		});

		it("should return an array of random items if passed a number", function () {

			var randomItems = names.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function (item) {
				expect(names.all).to.contain(item);
			});
		});
	});
});