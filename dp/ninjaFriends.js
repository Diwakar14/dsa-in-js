const grid = [
	[2, 3, 1, 2],
	[3, 4, 2, 2],
	[5, 6, 3, 5],
];

function ninjaFriends(grid, i, j1, j2, m, n, dp) {
	if (j1 < 0 || j1 >= n || j2 < 0 || j2 >= n) {
		return Number.NEGATIVE_INFINITY;
	}

	if (i == m - 1) {
		if (j1 == j2) {
			return grid[i][j1];
		} else {
			return grid[i][j1] + grid[i][j2];
		}
	}

	if (dp[i][j1][j2] != -1) return dp[i][j1][j2];

	let maxPath = Number.MIN_VALUE;
	for (let d1 = -1; d1 <= 1; d1++) {
		for (let d2 = -1; d2 <= 1; d2++) {
			let path;
			if (j1 == j2) {
				path =
					grid[i][j1] + ninjaFriends(grid, i + 1, j1 + d1, j2 + d2, m, n, dp);
			} else {
				path =
					grid[i][j1] +
					grid[i][j2] +
					ninjaFriends(grid, i + 1, j1 + d1, j2 + d2, m, n, dp);
			}

			maxPath = Math.max(maxPath, path);
		}
	}

	return (dp[i][j1][j2] = maxPath);
}

const m = grid.length;
const n = grid[0].length;
const dp = Array.from(Array(m), () =>
	Array.from(Array(n), () => new Array(n).fill(-1))
);

const path = ninjaFriends(grid, 0, 0, n - 1, m, n, dp);
console.log(dp);
console.log(path);
