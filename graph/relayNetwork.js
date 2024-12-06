const times = [
	[2, 1, 1],
	[2, 3, 1],
	[3, 4, 1],
];
const n = 4,
	k = 2;

function createMat() {
	let matArr = new Array(n);

	for (let i = 0; i < n; i++) {
		matArr[i] = new Array(n).fill(0);
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let e = 0; e < times.length; e++) {
				let [u, v, w] = times[e];
				if (i == u - 1 && j == v - 1) {
					matArr[i][j] = w;
				}
			}
		}
	}

	console.log(matArr);
	return matArr;
}

function minDist(dist, mst) {
	let min = Number.MAX_VALUE;
	let minIndex = -1;

	for (let i = 0; i < n; i++) {
		if (mst[i] == false && dist[i] <= min) {
			min = dist[i];
			minIndex = i;
		}
	}

	return minIndex;
}

function delay(graph, src) {
	let mst = new Array(n).fill(false);
	let dist = new Array(n).fill(Number.MAX_VALUE);

	dist[src] = 0;

	for (let i = 0; i < n - 1; i++) {
		const u = minDist(dist, mst);

		mst[u] = true;

		for (let v = 0; v < n; v++) {
			if (
				!mst[v] &&
				dist[u] != Number.MAX_VALUE &&
				graph[u][v] != 0 &&
				dist[u] + graph[u][v] < dist[v]
			) {
				dist[v] = dist[u] + graph[u][v];
			}
		}
	}

	return dist;
}

const g = createMat();

const dist = delay(g, k - 1);

console.log(Math.max(...dist));
