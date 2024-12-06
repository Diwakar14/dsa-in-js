const grid = [
	[1, 2, 10, 4],
	[100, 3, 2, 1],
	[1, 1, 20, 2],
	[1, 2, 2, 1],
];

function fallPath(grid, m, n, size, dp) {
	if (n < 0 || n >= size) return Number.NEGATIVE_INFINITY;
	if (m == 0) {
		return grid[0][n];
	}

	if (dp[m][n] != -1) return dp[m][n];

	const up = grid[m][n] + fallPath(grid, m - 1, n, size, dp);
	const leftDiagonal = grid[m][n] + fallPath(grid, m - 1, n - 1, size, dp);
	const rightDiagonal = grid[m][n] + fallPath(grid, m - 1, n + 1, size, dp);

	return (dp[m][n] = Math.max(up, leftDiagonal, rightDiagonal));
}

const m = grid.length;
const n = grid[0].length;
const dp = Array.from(Array(m), () => new Array(n).fill(-1));

let maxi = Number.MIN_VALUE;

for (let i = 0; i < m; i++) {
	const path = fallPath(grid, m - 1, i, m, dp);
	maxi = Math.max(maxi, path);
	console.log(maxi);
}
