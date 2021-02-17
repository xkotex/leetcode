export class CustomStack {

	private stack: number[];
	private maxSize: number;

	constructor(maxSize: number) {
		this.maxSize = maxSize;
		this.stack = [];
	}

	push(x: number): void {
		if (this.stack.length === this.maxSize)
			return;
		this.stack.push(x);
	}

	pop(): number {
		const value = this.stack.pop();
		return typeof value === "undefined" ? -1 : value;
	}

	increment(k: number, val: number): void {
		if (this.stack.length > 0) {
			const total = Math.min(k, this.stack.length);
			for (let i = 0; i < total; i++)
				this.stack[i] = this.stack[i] + val;
		}
	}
}