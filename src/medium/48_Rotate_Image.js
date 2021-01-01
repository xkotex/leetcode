/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	let len = matrix.length;
	for (let i = 0; i < matrix.length; i++)
		if (matrix[i].length !== len)
			return undefined;

	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
			let tmp = matrix[j][i];
			matrix[j][i] = matrix[i][j];
			matrix[i][j] = tmp;
		}
	}

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len / 2; j++) {
			let tmp = matrix[i][j];
			matrix[i][j] = matrix[i][len - j - 1];
			matrix[i][len - j - 1] = tmp;
		}
	}

	return matrix;
};