export function calculate(s: string): number {

	const array = [];

	while (s.length) {
		let num1, num2, firstOper, secondOper;
		firstOper = s.search(/[+*\/-]/g);
		num1 = s.substr(0, firstOper).trim();
		if (num1)
			array.push(num1);

		const opt = s.charAt(firstOper);
		s = s.slice(firstOper + 1);
		secondOper = s.search(/[+*\/-]/g);
		num2 = s.substr(0, secondOper === -1 ? undefined : secondOper).trim();
		s = secondOper === -1 ? "" : s.slice(secondOper);

		switch (opt) {
			case "+":
				array.push(+num2);
				break;
			case "-":
				array.push(-num2);
				break;
			case "*":
				array.push(+array.pop() * (+num2));
				break;
			case "/":
				array.push(+array.pop() / (+num2));
				break;
			default:
				array.push(num2);
		}
	}
	return +(array.reduce((a, c) => +a + +c));
}