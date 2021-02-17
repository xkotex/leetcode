export class MyCircularQueue {

	private queue: number[];
	private maxSize: number;
	private idxFront: number;
	private idxRear: number;
	private full: boolean;

	constructor(k: number) {
		this.queue = [];
		this.maxSize = k;

		this.idxFront = 0;
		this.idxRear = 0;
		this.full = false;
	}

	enQueue(value: number): boolean {
		if (this.isFull())
			return false;

		this.queue[this.idxRear] = value;
		this.idxRear = (this.idxRear + 1) % this.maxSize;

		if (this.idxRear === this.idxFront)
			this.full = true;

		return true;
	}

	deQueue(): boolean {
		if (this.isEmpty())
			return false;

		this.idxFront = (this.idxFront + 1) % this.maxSize;
		this.full = false;

		return true;
	}

	Front(): number {
		if (this.isEmpty())
			return -1;

		return this.queue[this.idxFront];
	}

	Rear(): number {
		if (this.isEmpty())
			return -1;

		return this.queue[(this.idxRear - 1 + this.maxSize) % this.maxSize];
	}

	isEmpty(): boolean {
		return !this.isFull() && this.idxRear === this.idxFront;
	}

	isFull(): boolean {
		return this.full;
	}
}