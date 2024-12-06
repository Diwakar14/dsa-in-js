const grid = [
	[0, 0, 0],
	[0, -1, 0],
	[0, 0, 0],
];

function uniquePath(grid, m, n, dp) {
	if (m == 0 && n == 0) return 1;
	if (m < 0 || n < 0) return 0;

	if (grid[m][n] == -1) return 0;
	if (dp[m][n] != -1) return dp[m][n];

	const top = uniquePath(grid, m - 1, n, dp);
	const left = uniquePath(grid, m, n - 1, dp);

	return (dp[m][n] = top + left);
}

let m = grid.length;
let n = grid[0].length;
const path = uniquePath(
	grid,
	m - 1,
	n - 1,
	Array.from(Array(m), () => new Array(n).fill(-1))
);

console.log(path);
