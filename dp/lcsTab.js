function tabulation(s1, s2) {
	const n = s1.length;
	const m = s2.length;

	let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(-1));

	// Row -> 0
	for (let i = 0; i <= n; i++) {
		dp[i][0] = 0;
	}

	// Col  -> 0
	for (let i = 0; i <= m; i++) {
		dp[0][i] = 0;
	}

	console.log(dp);

	for (let ind1 = 1; ind1 <= n; ind1++) {
		for (let ind2 = 1; ind2 <= m; ind2++) {
			if (s1[ind1 - 1] == s2[ind2 - 1]) {
				dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
			} else {
				dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
			}
		}
	}
	console.log(dp);
	return dp[n][m];
}

console.log(tabulation("acd", "ced"));
