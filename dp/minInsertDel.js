const s1 = "abcd";
const s2 = "anc";
const n = s1.length;
const m = s2.length;

function lcs(s1, s2) {
	let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(-1));

	for (let i = 0; i <= n; i++) dp[i][0] = 0;
	for (let i = 0; i <= m; i++) dp[0][i] = 0;

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (s1[i - 1] == s2[j - 1]) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
			}
		}
	}

	return dp[n][m];
}

const res = lcs(s1, s2);
const ans = n - res + (m - res);

console.log(ans);
