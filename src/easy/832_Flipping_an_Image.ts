export function flipAndInvertImage(A: number[][]): number[][] {
	let result = [];
	for (let i = 0; i < A.length; i++) {
		let a = flip(A[i]);
		result.push(invert(a));
	}
	return result;
};

function flip(arr: number[]): number[] {
	return arr.reverse();
}

function invert(arr: number[]): number[] {
	return arr.map(x => x === 0 ? 1 : 0);
}