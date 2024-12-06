const grid = [
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1],
];

function exploreFill(grid, row, col, initialColor, newColor, result) {
	let queue = [{ row, col }];

	let rowLen = grid.length;
	let colLen = grid[0].length;

	let dirRow = [+1, 0, -1, 0];
	let dirCol = [0, +1, 0, -1];

	while (queue.length > 0) {
		let { row, col } = queue.shift();

		result[row][col] = newColor;

		for (let i = 0; i < 4; i++) {
			let nRow = row + dirRow[i];
			let nCol = col + dirCol[i];

			if (
				nRow >= 0 &&
				nRow < rowLen &&
				nCol >= 0 &&
				nCol < colLen &&
				grid[nRow][nCol] == initialColor &&
				result[nRow][nCol] != newColor
			) {
				queue.push({ row: nRow, col: nCol });
			}
		}
	}
}

function floodFill(grid, srow, scol, newColor) {
	const initialColor = grid[srow][scol];
	const result = Array.from(Array(grid.length), () =>
		new Array(grid[0].length).fill(0)
	);
	exploreFill(grid, srow, scol, initialColor, newColor, result);
	console.log(result);
}

floodFill(grid, 1, 1, 2);
