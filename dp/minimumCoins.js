const arr = [1, 2, 3];
const target = 7;

function minimumCoins(ind, target, dp, arr) {
	if (ind == 0) {
		if (target % arr[0] == 0) {
			return target / arr[0];
		} else {
			return Number.MAX_VALUE;
		}
	}

	if (dp[ind][target] != -1) return dp[ind][target];

	const notTake = 0 + minimumCoins(ind - 1, target, dp, arr);

	let take = Number.MAX_VALUE;
	if (arr[ind] <= target) {
		take = 1 + minimumCoins(ind, target - arr[ind], dp, arr);
	}

	return (dp[ind][target] = Math.min(take, notTake));
}

const n = arr.length;
const T = 7;
const dp = Array.from(Array(n), () => new Array(T + 1).fill(-1));
const res = minimumCoins(n - 1, T, dp, arr);
console.log(res);
