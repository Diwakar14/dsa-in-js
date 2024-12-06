function countWays(m, n) {
	if (m == 0 && n == 0) return 1;

	if (m < 0 || n < 0) return 0;

	if (dp[m][n] != -1) return dp[m][n];

	const top = countWays(m - 1, n);
	const left = countWays(m, n - 1);

	return (dp[m][n] = top + left);
}

const dp = Array.from(Array(3), () => new Array(2).fill(-1));
const ways = countWays(2, 1);

console.log(ways);
