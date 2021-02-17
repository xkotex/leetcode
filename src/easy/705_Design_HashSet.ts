class MyHashSet {

	private inner: { [key: number]: boolean };

	constructor() {
		this.inner = {};
	}

	add(key: number): void {
		this.inner[key] = true;
	}

	remove(key: number): void {
		delete this.inner[key];
	}

	contains(key: number): boolean {
		let value = this.inner[key];
		return typeof value === "undefined" ? false : true;
	}
}