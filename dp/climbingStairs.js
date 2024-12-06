function climbingStairs(n) {
	if (n == 0) return 1;
	if (n == 1) return 1;

	return climbingStairs(n - 1) + climbingStairs(n - 2);
}

const steps = climbingStairs(3);
console.log(steps);
