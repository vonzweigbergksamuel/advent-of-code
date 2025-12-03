type Direction = "L" | "R";
type Dial = `${Direction}${number}`;
const input = await Bun.file("01.txt").text();
const turns = input.split("\n") as Dial[];

const START = 50;
const DIALS = 100;

function turnDial(turns: Dial[]) {
	for (const turn of turns) {
		const direction = turn[0] as "L" | "R";
		const amountToTurn = Number(turn.slice(1));

		if (direction === "L") {
			amountToTurn * -1;
		}
	}
}

turnDial(turns);
