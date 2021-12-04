export function mySqrt(x: number): number {
	let avg = (a: number, b: number) => (a + b) / 2, c = 5, b;
	for (let i = 0; i < 20; i++) {
		b = x / c;
		c = avg(b, c);
	}
	return Math.floor(c);
};