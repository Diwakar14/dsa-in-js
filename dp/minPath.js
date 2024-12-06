const grid = [
	[5, 9, 6],
	[11, 5, 2],
];

function minCost(grid, m, n, dp) {
	if (m == 0 && n == 0) {
		// Reached Dest.
		return grid[0][0];
	}

	if (m < 0 || n < 0) return Number.MAX_VALUE;
	if (dp[m][n] != -1) return dp[m][n];

	const top = grid[m][n] + minCost(grid, m - 1, n, dp);
	const left = grid[m][n] + minCost(grid, m, n - 1, dp);

	return (dp[m][n] = Math.min(top, left));
}

const m = grid.length;
const n = grid[0].length;
const dp = Array.from(Array(m), () => new Array(n).fill(-1));
const min = minCost(grid, m - 1, n - 1, dp);
console.log(min);
