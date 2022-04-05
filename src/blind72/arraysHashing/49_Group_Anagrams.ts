export function groupAnagrams(strs: string[]): string[][] {
	
	const map: {[key: string]: string[]} = {};

	for(let i = 0; i < strs.length; i++){
		const key = getKey(strs[i]);
		if(map[key])
			map[key].push(strs[i]);
		else
			map[key] = [strs[i]];
	}

	return Array.from(Object.values(map));

	function getKey(str: string): string {

		return str.split("").sort().join();
	}
};