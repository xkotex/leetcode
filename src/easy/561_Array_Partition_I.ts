export function arrayPairSum(nums: number[]): number {
	nums.sort((a, b) => a - b);
	let res = 0
	for (let i = 0; i < nums.length; i += 2)
		res += nums[i]
	return res;
};