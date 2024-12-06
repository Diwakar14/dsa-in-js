function frogJump2(n, height, dp, k) {
	if (n == 0) return 0;

	if (dp[n] != -1) return dp[n];

	let minJump = Number.MAX_VALUE;
	for (let i = 1; i <= k; i++) {
		if (n - i > 0) {
			let jump =
				frogJump2(n - i, height, dp, k) + Math.abs(height[n] - height[n - i]);
			minJump = Math.min(jump, minJump);
		}
	}

	return (dp[n] = minJump);
}

const total = frogJump(5, [30, 10, 60, 10, 60, 50], new Array(6).fill(-1), 2);
console.log(total);
