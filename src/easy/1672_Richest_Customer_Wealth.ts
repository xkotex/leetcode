export function maximumWealth(accounts: number[][]): number {
	let max = 0;
	for (let i = 0; i < accounts.length; i++) {
		let acc = accounts[i];
		let tmp = 0;
		for (let j = 0; j < acc.length; j++) {
			tmp += acc[j];
		}
		if (tmp > max)
			max = tmp;
	}
	return max;
};