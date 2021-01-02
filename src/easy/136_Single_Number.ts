export function singleNumber(nums: number[]): number {
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		let pair = false;
		for (let j = 0; j < nums.length; j++) {
			if (i === j)
				continue;
			if (nums[j] === num) {
				pair = true;
				break;
			}
		}
		if (!pair)
			return num;
	}
};