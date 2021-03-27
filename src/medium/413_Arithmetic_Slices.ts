export function numberOfArithmeticSlices(nums: number[]): number {

	if (nums.length < 3)
		return 0;

	let i = 0
	let j = 2;
	let count = 0;
	let gap = nums[1] - nums[0];

	while (j < nums.length) {
		const currGap = nums[j] - nums[j - 1];
		if (currGap === gap) {
			count += (j - i - 1);
			j++;
		} else {
			i = j - 1;
			j = j + 1;
			gap = currGap;
		}
	}

	return count;
}