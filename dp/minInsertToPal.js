const s1 = "abcaa";
const s2 = s1.split("").reverse().join("");
function longestPalindromicsString(s1, s2) {
	const n = s1.length;
	const m = s1.length;

	let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(-1));

	for (let i = 0; i <= n; i++) {
		dp[i][0] = 0;
	}
	for (let j = 0; j <= m; j++) {
		dp[0][j] = 0;
	}

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (s1[i - 1] == s2[j - 1]) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	return dp[n][m];
}

const res = longestPalindromicsString(s1, s2);
console.log(s1.length - res);
