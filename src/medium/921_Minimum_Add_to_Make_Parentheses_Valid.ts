export function minAddToMakeValid(S: string): number {

	if (!S.length)
		return 0;

	let tmp = 0;
	let balance = 0;
	for (let i = 0; i < S.length; ++i) {
		balance += S[i] === "(" ? 1 : -1;
		if (balance === -1) {
			tmp++;
			balance++;
		}
	}

	return tmp + balance;
};