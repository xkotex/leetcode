/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let ar = s.split(" ");
	let r = [];
	let result = "";
	for (let i = 0; i < ar.length; i++) {
		let a = ar[i].trim();
		if (a.length > 0)
			r.push(a);
	}
	for (let i = r.length - 1; i >= 0; i--)
		if (i == 0)
			result += r[i];
		else
			result += r[i] + " ";
	return result;
};