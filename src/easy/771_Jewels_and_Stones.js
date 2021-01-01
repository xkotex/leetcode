/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
	let jArr = J.split("");
	let sArr = S.split("");

	let result = 0;
	for (let i = 0; i < sArr.length; i++) {
		if (jArr.find(x => sArr[i] === x))
			result++;
	}
	return result;
};