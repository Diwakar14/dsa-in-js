const s1 = "abcde";
const s2 = "bdgek";

function print(s1, s2) {
	const n = s1.length;
	const m = s2.length;

	let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(-1));
	for (let i = 0; i <= n; i++) {
		dp[i][0] = 0;
	}

	for (let i = 0; i <= m; i++) {
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

	console.log(dp);
	const strLen = dp[n][m];

	const strArr = new Array(strLen).fill("$");
	console.log(strArr);

	let i = n,
		j = m;
	let index = strLen - 1;
	while (i > 0 && j > 0) {
		if (s1[i - 1] === s2[j - 1]) {
			strArr[index--] = s1[i - 1];
			i--;
			j--;
		} else if (s1[i - 1] > s2[j - 1]) {
			i--;
		} else {
			j--;
		}
	}

	console.log(strArr);
}

print(s1, s2);
