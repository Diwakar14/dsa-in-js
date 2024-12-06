let V = 9;
const graph = [
	[0, 4, 0, 0, 0, 0, 0, 8, 0],
	[4, 0, 8, 0, 0, 0, 0, 11, 0],
	[0, 8, 0, 7, 0, 4, 0, 0, 2],
	[0, 0, 7, 0, 9, 14, 0, 0, 0],
	[0, 0, 0, 9, 0, 10, 0, 0, 0],
	[0, 0, 4, 14, 10, 0, 2, 0, 0],
	[0, 0, 0, 0, 0, 2, 0, 1, 6],
	[8, 11, 0, 0, 0, 0, 1, 0, 7],
	[0, 0, 2, 0, 0, 0, 6, 7, 0],
];

function minDist(dist, mst) {
	let minIndex = -1;
	let minVal = Number.MAX_VALUE;
	for (let i = 0; i < V; i++) {
		if (mst[i] == false && dist[i] <= minVal) {
			minVal = dist[i];
			minIndex = i;
		}
	}

	return minIndex;
}

function dijkstra(graph, src) {
	// 1. Make the immediately reachable node with the wieght and rest with INF
	// 2. Run loop over each vertice and find the minimum cost edge
	// 3. Mark the edge as visited and move to next

	let mst = new Array(V).fill(false);
	let dist = new Array(V).fill(Number.MAX_VALUE);
	dist[src] = 0;

	for (let i = 0; i < V - 1; i++) {
		const u = minDist(dist, mst);

		mst[u] = true;

		for (let v = 0; v < V; v++) {
			if (
				!mst[v] &&
				graph[u][v] != 0 &&
				dist[u] != Number.MAX_VALUE &&
				dist[u] + graph[u][v] < dist[v]
			) {
				dist[v] = dist[u] + graph[u][v];
			}
		}
	}

	console.log(dist);
}

dijkstra(graph, 0);
