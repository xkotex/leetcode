export function subsets(nums: number[]): number[][] {
	let res: number[][] = [];
	recur(nums, 0, [], res);
	return res;
}

function recur(nums: number[], index: number, path: number[], res: number[][]) {
	res.push([...path]);
	for (let i = index; i < nums.length; i++) {
		path.push(nums[i]);
		recur(nums, i + 1, path, res);
		path.pop();
	}
}