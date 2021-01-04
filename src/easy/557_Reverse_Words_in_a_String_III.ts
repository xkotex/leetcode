export function reverseWords(s: string): string {
	let arr = s.split(" ");
	let res = "";
	for (let i = 0; i < arr.length; i++) {
		res += reverse(arr[i]);
		if (i !== arr.length - 1)
			res += " ";
	}
	return res;
}

function reverse(str: string): string {
	let res = "";
	for (let i = str.length - 1; i >= 0; i--)
		res += str[i];
	return res;
}