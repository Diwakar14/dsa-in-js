const n = 5;
const arr = [2, 5, 7, 8, 10];

function rodCutting(ind, n, arr, dp) {
	if (ind == 0) {
		return n * arr[0];
	}

	if (dp[ind][n] != -1) return dp[ind][n];

	let notTake = rodCutting(ind - 1, n, arr, dp);

	let take = 0;
	let rodLen = ind + 1;
	if (rodLen <= n) {
		take = arr[ind] + rodCutting(ind, n - rodLen, arr, dp);
	}

	return (dp[ind][n] = Math.max(notTake, take));
}

const dp = Array.from(Array(n), () => new Array(n + 1).fill(-1));
const res = rodCutting(n - 1, n, arr, dp);
console.log(res);
