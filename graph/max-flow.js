const V = 6;

function bfs(rGraph, s, t, parent) {
	let visited = new Array(V).fill(false);

	let queue = [];
	queue.push(s);

	visited[s] = true;
	parent[s] = -1;

	while (queue.length != 0) {
		let u = queue.shift();

		for (let v = 0; v < V; v++) {
			if (visited[v] == false && rGraph[u][v] > 0) {
				if (v == t) {
					parent[v] = u;
					return true;
				}

				parent[v] = u;
				visited[v] = true;
				queue.push(v);
			}
		}
	}

	return false;
}

function fordFulkerson(graph, s, t) {
	let u, v;

	let rGraph = new Array(V);
	for (u = 0; u < V; u++) {
		rGraph[u] = new Array(V);

		for (v = 0; v < V; v++) {
			rGraph[u][v] = graph[u][v];
		}
	}

	let parent = new Array(V);

	let max_flow = 0;

	while (bfs(rGraph, s, t, parent)) {
		let path_flow = Number.MAX_VALUE;

		// Check from the sink, and find the min possible
		// flow of the path
		for (v = t; v != s; v = parent[v]) {
			u = parent[v];
			path_flow = Math.min(path_flow, rGraph[u][v]);
		}

		for (v = t; v != s; v = parent[v]) {
			u = parent[v];
			rGraph[u][v] -= path_flow;
			rGraph[v][u] += path_flow;
		}

		max_flow += path_flow;
	}

	return max_flow;
}

let graph = [
	[0, 16, 13, 0, 0, 0],
	[0, 0, 10, 12, 0, 0],
	[0, 4, 0, 0, 14, 0],
	[0, 0, 9, 0, 0, 20],
	[0, 0, 0, 7, 0, 4],
	[0, 0, 0, 0, 0, 0],
];
console.log("The maximum possible flow is " + fordFulkerson(graph, 0, 5));
