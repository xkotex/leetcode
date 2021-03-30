export function minDeletions(s: string): number {

	const map: { [str: string]: number } = {};

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]])
			map[s[i]] = map[s[i]] + 1;
		else
			map[s[i]] = 1;
	}

	const values = Object.values(map);
	if ((new Set(values)).size === values.length)
		return 0;

	let numSet = new Set();
	let result = 0;

	for (let n in map) {
		let num = map[n];
		if (num > 0) {
			if (numSet.has(num)) {
				let i = 0;
				for (; i < num; i++) {
					if (!numSet.has(num - i))
						break;
				}
				numSet.add(num - i);
				result += i;
			} else
				numSet.add(num);
		}
	}

	return result;
}