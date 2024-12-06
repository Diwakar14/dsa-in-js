const arr = [1, 2, 3, 4];
const k = 4;

function subsetSum(ind, target) {
	if (target === 0) {
		return 0;
	}

	if (ind === 0) {
		return arr[ind] === target;
	}

	let notTake = subsetSum(ind - 1, target);
	let take = false;

	if (arr[ind] <= target) {
		take = subsetSum(ind - 1, target - arr[ind]);
	}

	return notTake || take;
}

const dp = Array.from(Array(arr.length), () => new Array(k).fill(false));
console.log(dp);
const result = subsetSum(arr.length - 1, k);
console.log(result);

function Tabulation() {
	for (let i = 0; i < arr.length; i++) {
		dp[i][0] = true;
	}

	if (arr[0] <= k) {
		dp[0][arr[0]] = true;
	}

	for (let ind = 1; ind < arr.length; ind++) {
		for (let target = 1; target <= k; target++) {
			let notTake = dp[ind - 1][target];

			let take = false;
			if (arr[ind] <= target) {
				take = dp[ind - 1][target - arr[ind]];
			}

			dp[ind][target] = take || notTake;
		}
	}
}

const res = Tabulation();
