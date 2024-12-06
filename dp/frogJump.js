function frogJump(n, height, dp) {
	if (n == 0) return 0;
	if (dp[n] != -1) {
		return dp[n];
	}

	let secondOne = Number.MAX_VALUE;
	let jumpOne =
		frogJump(n - 1, height, dp) + Math.abs(height[n] - height[n - 1]);

	if (n > 1) {
		secondOne =
			frogJump(n - 2, height, dp) + Math.abs(height[n] - height[n - 2]);
	}

	let result = Math.min(jumpOne, secondOne);
	dp[n] = result;
	return result;
}

const total = frogJump(5, [30, 10, 60, 10, 60, 50], new Array(6).fill(-1));
console.log(total);
