const grid = [
	[1, 2, 2],
	[3, 8, 2],
	[5, 3, 5],
];

const n = grid.length;
const m = grid[0].length;

const source = { x: 0, y: 0 };
const destination = { x: n - 1, y: m - 1 };

function minEffor(grid, source, destination) {
	let queue = [{ diff: 0, coord: source }];
	let efforts = Array.from(Array(n), () =>
		new Array(m).fill(Number.MAX_SAFE_INTEGER)
	);

	let dr = [-1, 0, +1, 0];
	let dc = [0, +1, 0, -1];
	while (queue.length > 0) {
		let { diff, coord } = queue.shift();
		let { x, y } = coord;

		if (x === destination.x && y === destination.y) {
			return diff;
		}

		for (let i = 0; i < 4; i++) {
			let nrow = x + dr[i];
			let ncol = y + dc[i];

			if (
				nrow >= 0 &&
				nrow < n &&
				ncol >= 0 &&
				ncol < m &&
				grid[nrow][ncol] > 0
			) {
				let newEffort = Math.max(Math.abs(grid[x][y] - grid[nrow][ncol]), diff);

				if (newEffort < efforts[nrow][ncol]) {
					efforts[nrow][ncol] = newEffort;

					queue.push({
						diff: newEffort,
						coord: { x: nrow, y: ncol },
					});

					queue.sort((a, b) => a.diff - b.diff);
				}
			}
		}
	}

	return efforts;
}

const effort = minEffor(grid, source, destination);
console.log(effort);
