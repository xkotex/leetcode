export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {

	const stack = [root]
	let sum = 0

	while (stack.length) {

		const node = stack.pop()
		const value = node.val

		if (value >= low && value <= high) {
			sum += value
		}

		if (node.left) {
			stack.push(node.left)
		}

		if (node.right) {
			stack.push(node.right)
		}
	}

	return sum;
};