/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
	let res = [];
	for (let i = 0; i < nums.length - 1; i++) {
		if (i % 2 !== 0)
			continue;
		let [freq, pair] = [nums[i], nums[i + 1]];
		res.push(...Array(freq).fill(pair));
	}
	return res;
};