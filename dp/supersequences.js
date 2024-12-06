const s1 = "brute";
const s2 = "groot";
const n = s1.length;
const m = s2.length;
let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

function lcs(s1, s2) {
	for (let i = 0; i <= n; i++) {
		dp[i][0] = 0;
	}

	for (let i = 0; i <= n; i++) {
		dp[0][i] = 0;
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

const l = lcs(s1, s2);
let index = l - 1;
let ans = "";

let i = n;
let j = m;
while (i > 0 && j > 0) {
	if (s1[i - 1] == s2[j - 1]) {
		ans += s1[i - 1]; // When the string is equal.
		i--;
		j--;
	} else if (dp[i - 1][j] > dp[i][j - 1]) {
		// Take the path that has longest common sequence.
		ans += s1[i - 1];
		i--;
	} else {
		ans += s2[j - 1];
		j--;
	}
}
while (i > 0) {
	ans += s1[i - 1];
	i--;
}
while (j > 0) {
	ans += s2[j - 1];
	j--;
}
ans = ans.toString().split("").reverse().join("");
console.log(ans);
