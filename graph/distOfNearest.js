const grid = [
	[0, 1, 1, 0],
	[1, 1, 0, 0],
	[0, 0, 1, 1],
];

function distOfNearest(grid) {
	let row = grid.length;
	let col = grid[0].length;

	const visited = Array.from(Array(row), () => new Array(col).fill(0));
	const distance = Array.from(Array(row), () => new Array(col).fill(0));

	const queue = [];

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] == 1) {
				visited[i][j] = 1;
				queue.push({ coods: { i, j }, dist: 0 });
			} else {
				visited[i][j] = 0;
			}
		}
	}

	const delRow = [-1, 0, +1, 0];
	const delCol = [0, +1, 0, -1];

	while (queue.length != 0) {
		let { coods, dist } = queue.shift();

		distance[coods.i][coods.j] = dist;

		for (let i = 0; i < 4; i++) {
			let nrow = coods.i + delRow[i];
			let ncol = coods.j + delCol[i];

			if (
				nrow >= 0 &&
				nrow < row &&
				ncol >= 0 &&
				ncol < col &&
				visited[nrow][ncol] == 0
			) {
				visited[nrow][ncol] = 1;
				queue.push({ coods: { i: nrow, j: ncol }, dist: dist + 1 });
			}
		}
	}

	console.log(distance);
}

distOfNearest(grid);
