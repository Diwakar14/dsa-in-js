function maxSumOfAdj(n, arr, dp) {
	dp[0] = arr[0];

	for (let i = 1; i < n; i++) {
		let pick = arr[i];

		if (i > 1) {
			pick += dp[i - 2];
		}

		let nonPick = dp[i - 1];

		dp[i] = Math.max(pick, nonPick);
	}

	return dp[n - 1];
}

const arr = [2, 1, 4, 9];
const res = maxSumOfAdj(arr.length, arr, new Array(arr.length).fill(-1));

console.log(res);
