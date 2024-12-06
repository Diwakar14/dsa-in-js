const grid = [
	[2, 1, 1],
	[1, 1, 0],
	[0, 1, 1],
];

function findRottonTomato(grid, m, n, result) {
	let queue = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] == 2) {
				queue.push({ i, j, tm: 0 });
			}
		}
	}

	let delRow = [+1, 0, -1, 0];
	let delCol = [0, +1, 0, -1];
	let count = 0;

	while (queue.length > 0) {
		let { i, j, tm } = queue.shift();
		count = Math.max(count, tm);

		for (let k = 0; k < 4; k++) {
			let nrow = i + delRow[k];
			let ncol = j + delCol[k];

			if (
				nrow >= 0 &&
				nrow < m &&
				ncol >= 0 &&
				ncol < n &&
				grid[nrow][ncol] == 1 &&
				result[nrow][ncol] != 2
			) {
				queue.push({ i: nrow, j: ncol, tm: tm + 1 });
				result[nrow][ncol] = 2;
			}
		}
	}

	console.log(count);
}

function rottonTomato(grid) {
	let m = grid.length;
	let n = grid[0].length;

	const result = Array.from(Array(m), () => new Array(n).fill(0));

	findRottonTomato(grid, m, n, result);
	console.log(result);
}

rottonTomato(grid);
