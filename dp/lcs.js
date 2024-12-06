const s1 = "acd";
const s2 = "ced";

function lcs(ind1, ind2, s1, s2, dp) {
	if (ind1 < 0 || ind2 < 0) {
		return 0;
	}

	if (dp[ind1][ind2] != -1) return dp[ind1][ind2];

	if (s1[ind1] === s2[ind2]) {
		return (dp[ind1][ind2] = 1 + lcs(ind1 - 1, ind2 - 1, s1, s2, dp));
	} else {
		var max = Math.max(
			lcs(ind1 - 1, ind2, s1, s2, dp),
			lcs(ind1, ind2 - 1, s1, s2, dp)
		);
		return (dp[ind1][ind2] = max);
	}
}

const n = s1.length;
const m = s2.length;

const dp = Array.from(Array(n), () => new Array(m).fill(-1));
const ls = lcs(n - 1, m - 1, s1, s2, dp);
console.log(ls);
