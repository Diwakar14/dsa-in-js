function houseRobber(n, arr, dp) {
	dp[0] = arr[0];

	for (let i = 1; i < n; i++) {
		let pick = arr[i];

		if (i > 1) {
			pick += dp[i - 2];
		}

		let nonPick = dp[i - 1];

		dp[i] = Math.max(pick, nonPick);
	}

	return dp[n - 1];
}

function Runner(n, arr) {
	let arr1 = [...arr];
	let arr2 = [...arr];

	arr1.shift();
	arr2.pop();

	var first = houseRobber(arr1.length, arr1, new Array(arr1.length).fill(-1));
	var second = houseRobber(arr2.length, arr2, new Array(arr2.length).fill(-1));
	return Math.max(first, second);
}

const arr = [1, 5, 1, 2, 6];
const n = arr.length;
const maxRob = Runner(n, arr);
console.log(maxRob);
