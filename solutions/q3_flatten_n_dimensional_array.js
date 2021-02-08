/* Write a Program to Flatten a given n-dimensional array */

const flatten = (inputArray) => {
	if (Array.isArray(inputArray)) {
		return inputArray.reduce(function(acc, cur) {
			let items = Array.isArray(cur) ? flatten(cur) : [cur];
			return acc.concat(items);
		}, []);
	}
	return null;
};


/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
