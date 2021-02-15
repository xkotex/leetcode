export function singleNumber(nums: number[]): number[] {

	let result: number[] = [];
	let map: { [num: number]: number } = {};
	nums.map(x => {
		if (map[x]) {
			let n = map[x];
			map[x] = n + 1;
		} else {
			map[x] = 1;
		}
	});
	for (let key in map)
		if (map[key] === 1)
			result.push(+key);

	return result;
};