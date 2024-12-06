const arr = [1, 2, 3, 1];

function targetSum(ind, target, arr, dp) {
	if (ind == 0) {
		if (target == 0 && arr[0] == 0) return 2;
		if (target == 0 || arr[0] == target) return 1;

		return 0;
	}

	if (dp[ind][target] != -1) return dp[ind][target];

	const notTake = targetSum(ind - 1, target, arr, dp);
	let take = 0;
	if (arr[ind] <= target) {
		take = targetSum(ind - 1, target - arr[ind], arr, dp);
	}

	return (dp[ind][target] = take + notTake);
}

const n = arr.length;
const target = 3;
const total = arr.reduce((a, b) => a + b, 0);
const newTarget = (total - target) / 2;
const dp = Array.from(Array(n), () => new Array(newTarget + 1).fill(-1));

if (total - target < 0) return 0;
if ((total - target) % 2 == 1) return 0;

const res = targetSum(n - 1, newTarget, arr, dp);

console.log(res);
