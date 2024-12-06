function minSubset(ind, target, arr, dp) {
	if (target == 0) return true;

	if (ind == 0) return arr[ind] == target;

	if (dp[ind][target] != false) return dp[ind][target];

	const notTake = minSubset(ind - 1, target, arr, dp);

	let taken = false;
	if (arr[ind] <= target) {
		taken = minSubset(ind - 1, target - arr[ind], arr, dp);
	}

	return (dp[ind][target] = taken || notTake);
}

const arr = [1, 2, 3, 4];
const total = arr.reduce((a, b) => a + b, 0);
const dp = Array.from(Array(arr.length), () =>
	new Array(total + 1).fill(false)
);
for (let i = 0; i <= total; i++) {
	minSubset(arr.length - 1, i, arr, dp);
}

let min = Number.MAX_VALUE;
for (let i = 0; i <= total; i++) {
	let diff = Math.abs(i - (total - i));
	min = Math.min(min, diff);
}

console.log(min);
