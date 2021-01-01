/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	let arr = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		let count = nums[i];
		for (let j = 0; j < nums.length; j++) {
			if (i != j && j < i)
				count += nums[j];
		}
		arr.push(count);
	}
	return arr;
};