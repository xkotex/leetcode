/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let a = x.toString();
	let b = a.split("").reverse().join("");
	return a === b;
};