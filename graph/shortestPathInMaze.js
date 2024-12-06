const grid = [
	[1, 1, 1, 1],
	[1, 1, 0, 1],
	[1, 1, 1, 1],
	[1, 1, 0, 0],
	[1, 0, 0, 1],
];

const source = [0, 1];
const destination = [2, 2];
const n = grid.length;
const m = grid[0].length;

function shortestPathInMaze(grid, source, destination) {
	if (source[0] == destination[0] && source[1] == source[1]) return 0;

	let queue = [{ dist: 0, coord: source }];
	let distance = Array.from(Array(n), () =>
		new Array(m).fill(Number.MAX_VALUE)
	);

	let dr = [-1, 0, +1, 0];
	let dc = [0, +1, 0, -1];

	while (queue.length > 0) {
		let { dist, coord } = queue.shift();
		let [x, y] = coord;

		for (let i = 0; i < 4; i++) {
			let nrow = x + dr[i];
			let ncol = y + dc[i];

			if (
				nrow >= 0 &&
				nrow < n &&
				ncol >= 0 &&
				ncol < m &&
				grid[nrow][ncol] == 1 &&
				dist + 1 < distance[nrow][ncol]
			) {
				distance[nrow][ncol] = dist + 1;

				if (nrow == destination[0] && ncol == destination[1]) {
					return dist + 1;
				}

				queue.push({ dist: dist + 1, coord: [nrow, ncol] });
			}
		}
	}

	return distance;
}

const distance = shortestPathInMaze(grid, source, destination);
console.log(distance);
