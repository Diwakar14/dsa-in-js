function longestSubstring(s1, s2) {
	const n = s1.length;
	const m = s2.length;

	let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

	let ans = 0;

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (s1[i - 1] == s2[j - 1]) {
				let res = 1 + dp[i - 1][j - 1];
				dp[i][j] = res;
				ans = Math.max(res, ans);
			} else {
				dp[i][j] = 0;
			}
		}
	}

	console.log(dp);

	console.log(ans);
}

const s1 = "abcjklp";
const s2 = "acjkp";
longestSubstring(s1, s2);
