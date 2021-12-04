export function longestCommonPrefix(strs: string[]): string {
	if (!strs?.length)
		return "";
	if (strs.length === 1)
		return strs[0];
	let result = "";
	for (let i = 0; i < strs[0].length; i++) {
		let s = strs[0][i];
		let check = false;
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== s) {
				check = true;
				break;
			}
		}
		if (!check)
			result += s;
		else
			break;
	}
	return result;
};