function countSubset(ind, target, dp, arr) {
	if (target == 0) return true;
	if (ind == 0) return arr[0] == target;

	if (dp[ind][target] != false) return dp[ind][target];

	const notTake = countSubset(ind - 1, target, dp, arr);

	let take = false;

	if (arr[ind] <= target) {
		take = countSubset(ind - 1, target - arr[ind], dp, arr);
	}

	return (dp[ind][target] = take + notTake);
}

const arr = [1, 2, 2, 3];
const k = 3;
const dp = Array.from(Array(arr.length), () => new Array(k + 1).fill(false));
const res = countSubset(arr.length - 1, k, dp, arr);
console.log(res);
