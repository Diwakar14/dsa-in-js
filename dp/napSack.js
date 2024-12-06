const wt = [2, 4, 6];
let val = [5, 11, 13];

const w = 10;
const n = wt.length;

function napSack(ind, target, value, arr, dp) {
	if (ind == 0) {
		return (target / arr[0]) * val[0];
	}

	if (dp[ind][target] != -1) return dp[ind][target];

	const notTake = 0 + napSack(ind - 1, target, value, arr, dp);

	let take = Number.MIN_VALUE;

	if (wt[ind] <= target) {
		take = value[ind] + napSack(ind, target - wt[ind], value, arr, dp);
	}

	return (dp[ind][target] = Math.max(notTake, take));
}

const dp = Array.from(Array(n), () => new Array(w + 1).fill(-1));
const res = napSack(n - 1, w, val, wt, dp);
console.log(res);
