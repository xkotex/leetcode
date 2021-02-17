export function distributeCandies(candyType: number[]): number {
	let set = new Set(candyType);
	let count = 0;
	for (let i = 0; i < candyType.length; i += 2)
		count++;
	return count > set.size ? set.size : count;
};