export function lengthOfLastWord(s: string): number {
	if (!s?.length)
		return 0;
	let array = s.split(" ").filter(x => !!x.length);
	if (!array.length)
		return 0;
	return array[array.length - 1].length;
};