/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	let arr = n.toString().split("").map(x => +x);
	let digit, sum;
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			digit = arr[i];
			sum = arr[i];
		} else {
			digit *= arr[i];
			sum += arr[i];
		}
	}
	return digit - sum;
};