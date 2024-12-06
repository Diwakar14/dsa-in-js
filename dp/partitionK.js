const arr = [2, 3, 3, 3, 4, 5, 7];

function partition(ind, arr, target, dp) {
	if (target == 0) return true;

	if (ind == 0) return arr[0] == target;

	if (dp[ind][target] != false) return dp[ind][target];

	const notTake = partition(ind - 1, arr, target, dp);
	let take = false;

	if (arr[ind] <= target) {
		take = partition(ind - 1, arr, target - arr[ind], dp);
	}

	return (dp[ind][target] = notTake || take);
}

let total = arr.reduce((a, b) => a + b, 0);
console.log(total);

if (total % 2 == 1) return false;
else {
	const k = total / 2;
	console.log(k);
	const dp = Array.from(Array(arr.length), () => new Array(k + 1).fill(false));
	console.log(dp);
	const part = partition(arr.length - 1, arr, k, dp);
	console.log(part);
}
