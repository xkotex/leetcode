/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		let count = 0;
		for (let j = i + 1; j < nums.length; j++) {
			if (i < j && nums[i] > nums[j])
				count++;
		}
		result.push(count);
	}
	return result;
};