export function twoSum(nums: number[], target: number): number[] {

	if(!nums.length)
		return;

	for(let i = 0; i < nums.length; i++){
		for(let j = 0; j < nums.length; j++){
			if(i === j)
				continue;
			if((nums[i] + nums[j] === target))
				return [i, j];
		}
	}

	return [];
};