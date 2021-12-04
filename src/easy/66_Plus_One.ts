export function plusOne(digits: number[]): number[] {
	let num = +digits.join("");
	let numStr = (BigInt(num) + 1n).toString();
	let array = [];
	for (let i = 0; i < numStr.length; i++)
		array.push(+numStr[i]);
	return array;
};

// return String(BigInt(digits.join('')) + 1n).split('').map(Number);