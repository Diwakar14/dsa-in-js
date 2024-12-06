const grid = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]];

function triangular(grid, m, n, size, dp) {
	if (dp[m][n] != -1) return dp[m][n];

	if (m === size - 1) return grid[m][n];

	const down = grid[m][n] + triangular(grid, m + 1, n, size, dp);
	const diagonal = grid[m][n] + triangular(grid, m + 1, n + 1, size, dp);

	return (dp[m][n] = Math.min(down, diagonal));
}

const m = grid.length;
const n = grid[0].length;
const dp = Array.from(Array(m), () => new Array(m).fill(-1));
const path = triangular(grid, 0, 0, m, dp);
console.log(path);
