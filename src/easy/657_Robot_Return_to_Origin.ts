export function judgeCircle(moves: string): boolean {

	let gorizontal = 0; // L - true, R - false
	let vertical = 0; // U - true, D - false

	for (let i = 0; i < moves.length; i++) {
		switch (moves[i]) {
			case "U": vertical += 1; continue;
			case "D": vertical -= 1; continue;
			case "L": gorizontal += 1; continue;
			default: gorizontal -= 1; continue;
		}
	}

	return gorizontal === 0 && vertical === 0;
};