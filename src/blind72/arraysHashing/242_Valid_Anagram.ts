export function isAnagram(s: string, t: string): boolean {

	if(s.length !== t.length)
		return false;

	const sArr = s.split("");
	const tArr = t.split("");

	for(let i = 0; i < sArr.length; i++){
		const index = tArr.indexOf(sArr[i]);
		if(index === -1)
			return false;
		else
			tArr.splice(index, 1);
	}
	return true;
};