/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
	let val = x ^ y;
	let distance;
	for (distance = 0; val > 0; distance++)
		val &= val - 1;
	return distance;
};