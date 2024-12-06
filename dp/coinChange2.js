const arr = [1, 2, 3];

function coinChange(ind, target, arr, dp) {
	if (ind == 0) {
		return target % arr[0] == 0;
	}

	if (dp[ind][target] != -1) return dp[ind][target];

	const notTake = coinChange(ind - 1, target, arr, dp);

	let take = 0;
	if (arr[ind] <= target) {
		take = coinChange(ind, target - arr[ind], arr, dp);
	}

	return (dp[ind][target] = notTake + take);
}

const n = arr.length;
const T = 4;
const dp = Array.from(Array(n), () => new Array(T + 1).fill(-1));
const res = coinChange(n - 1, T, arr, dp);
console.log(res);
