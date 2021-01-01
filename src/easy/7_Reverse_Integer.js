/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let a = x.toString();
	let minus = false;
	if (a.indexOf("-") !== -1) {
		minus = true;
		a = a.split("").slice(1, a.length).reverse().join("");
	} else
		a = a.split("").reverse().join("");

	if (a[0] === 0)
		a = a.split("").slice(1, a.length).join("");
	if (minus)
		a = "-" + a;
	if (Math.pow(-2, 31) > +a || +a > Math.pow(2, 31) - 1)
		return 0;
	return +a;
};