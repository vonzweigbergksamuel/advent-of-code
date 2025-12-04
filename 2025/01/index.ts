type Direction = "L" | "R";
type Dial = `${Direction}${number}`;
const input = await Bun.file("input.txt").text();
const turns = input.split("\n") as Dial[];

console.log(turns);

const START = 50;
const DIALS = 100;

function task1(turns: Dial[]): number {
	let current = START;
	let password = 0;

	for (const turn of turns) {
		if (turn.length === 0) {
			continue;
		}

		const direction = turn[0] as Direction;
		let amountToTurn = Number(turn.slice(1));

		if (direction === "L") {
			amountToTurn *= -1;
		}

		let change = current + amountToTurn;
		while (change < 0) {
			change = DIALS + change;
		}
		current = change % DIALS;

		if (current === 0) {
			password++;
		}
	}

	return password;
}

console.log(task1(turns));
