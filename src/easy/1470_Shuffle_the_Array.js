/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		if (i < n)
			arr.push(nums[i], nums[n + i])
	}
	return arr;
};