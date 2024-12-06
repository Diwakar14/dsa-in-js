const grid = [
	[0, 0, 0, 0],
	[1, 1, 1, 0],
	[0, 1, 1, 0],
	[0, 0, 0, 1],
];

function explore(grid, row, col, visited) {
	const rowInbounds = row >= 0 && row < grid.length;
	const colInbounds = col >= 0 && col < grid.length;

	if (!rowInbounds || !colInbounds) return 0;

	if (grid[row][col] == 0) return 0;

	let pos = row + "," + col;
	if (visited.has(pos)) return 0;

	visited.add(pos);

	let count = 1;
	count += explore(grid, row + 1, col, visited);
	count += explore(grid, row - 1, col, visited);
	count += explore(grid, row, col + 1, visited);
	count += explore(grid, row, col - 1, visited);

	return count;
}

function numberOfEnclaves(grid) {
	let max = Number.MIN_VALUE;
	let visited = new Set();
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			max = Math.max(max, explore(grid, col, row, visited));
		}
	}

	return max;
}

const maxNumber = numberOfEnclaves(grid);
console.log(maxNumber);
