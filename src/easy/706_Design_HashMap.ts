export class MyHashMap {

	private inner: { [key: number]: number };

	constructor() {
		this.inner = {};
	}

	put(key: number, value: number): void {
		this.inner[key] = value;
	}

	get(key: number): number {
		const value = this.inner[key];
		return typeof value !== "undefined" ? value : -1;
	}

	remove(key: number): void {
		delete this.inner[key];
	}
}