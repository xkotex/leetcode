export function selfDividingNumbers(left: number, right: number): number[] {
	let result: number[] = [];
	for (let i = left; i <= right; i++) {
		if (selfDivide(i))
			result.push(i);
	}
	return result;
}

function selfDivide(num: number): boolean {
	let n = num.toString().split("").map(x => +x);
	for (let i = 0; i < n.length; i++) {
		if (num % n[i] !== 0)
			return false;
	}
	return true;
}