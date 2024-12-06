function f(day, last, grid, dp) {
	if (dp[day][last] != -1) return dp[day][last];

	// Base case
	if (day == 0) {
		let maxi = 0;

		for (let i = 0; i <= 2; i++) {
			if (i != last) {
				maxi = Math.max(maxi, grid[0][i]);
			}
		}
		return (dp[day][last] = maxi);
	}

	let maxi = 0;
	for (let i = 0; i <= 2; i++) {
		if (i != last) {
			let activity = grid[day][i] + f(day - 1, i, grid, dp);
			maxi = Math.max(maxi, activity);
		}
	}

	return (dp[day][last] = maxi);
}

function ninjaTraining(grid, n) {
	let dp = Array.from(Array(n), () => new Array(n + 1).fill(-1));
	return f(n - 1, 3, grid, dp);
}

const grid = [
	[10, 40, 70],
	[20, 50, 80],
	[30, 60, 90],
];
const n = grid.length;
const ninja = ninjaTraining(grid, n);

console.log(ninja);
