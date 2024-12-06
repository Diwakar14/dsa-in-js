// const grid = [
// 	["X", "X", "X", "X"],
// 	["X", "O", "X", "X"],
// 	["X", "O", "O", "X"],
// 	["X", "O", "X", "X"],
// 	["X", "X", "O", "O"],
// ];
const grid = [
	["X", "X", "X", "O"],
	["X", "O", "X", "X"],
	["X", "X", "O", "X"],
	["O", "X", "X", "X"],
	["X", "X", "O", "O"],
];

function exploreRegion(grid, row, col, visitedIsland, visited, isSorrounded) {
	const rowInbounds = row >= 0 && row < grid.length;
	const colInbounds = col >= 0 && col < grid[0].length;

	if (!rowInbounds || !colInbounds) return false;

	if (grid[row][col] == "X") return false;

	const pos = row + "," + col;
	if (visited.has(pos)) return false;
	visited.add(pos);

	if (row > 0 && row < grid.length - 1 && col > 0 && col < grid[0].length - 1) {
		isSorrounded = true;
	} else {
		isSorrounded = false;
	}

	visitedIsland.push({ row, col, isSorrounded });
	exploreRegion(grid, row + 1, col, visitedIsland, visited, isSorrounded);
	exploreRegion(grid, row - 1, col, visitedIsland, visited, isSorrounded);
	exploreRegion(grid, row, col + 1, visitedIsland, visited, isSorrounded);
	exploreRegion(grid, row, col - 1, visitedIsland, visited, isSorrounded);

	return visitedIsland.every((d) => d.isSorrounded == true);
}

function sorroundedRegion(grid) {
	let visited = new Set();
	let isSorrounded = false;

	let allIslands = [];

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			let visitedIsland = [];

			if (exploreRegion(grid, row, col, visitedIsland, visited, isSorrounded)) {
				allIslands = [...allIslands, ...visitedIsland];
			}
		}
	}

	for (let i = 0; i < allIslands.length; i++) {
		const { row, col } = allIslands[i];
		grid[row][col] = "X";
	}

	console.log(grid);
}
sorroundedRegion(grid);
