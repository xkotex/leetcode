export function sumZero(n: number): number[] {

	let result = [];

	if (n % 2 === 0) {
		for (let i = 0; i < n; i += 2) {
			result[i] = i + 1;
			result[i + 1] = -1 * (i + 1);
		}
	} else {
		for (let i = 0; i < n - 1; i += 2) {
			result[i] = i + 1;
			result[i + 1] = -1 * (i + 1);
		}
		result[n - 1] = 0;
	}

	return result;
};