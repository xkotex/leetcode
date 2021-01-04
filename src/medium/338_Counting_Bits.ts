export function countBits(num: number): number[] {
	let res: number[] = [];
	for (let i = 0; i <= num; i++) {
		const bit = toBit(i);
		res.push(bit.split("1").length - 1);
	}
	return res;
}

function toBit(n: number): string {
	let bin = "";
	while (Math.ceil(n / 2) > 0) {
		bin = n % 2 + bin;
		n = Math.floor(n / 2);
	}
	return bin;
}