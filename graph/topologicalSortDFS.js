function sortTopolog(adj, current, stack, visited) {
	visited[current] = true;
	for (let neighbor of adj[current]) {
		if (!visited[neighbor]) {
			sortTopolog(adj, neighbor, stack, visited);
		}
	}

	stack.push(current);
}

function topologicalSort(adj, V) {
	let stack = [];
	let visited = new Array(V).fill();

	for (let i = 0; i < V; i++) {
		if (!visited[i]) {
			sortTopolog(adj, i, stack, visited);
		}
	}

	while (stack.length > 0) {
		console.log(stack.pop() + " ");
	}
}

(() => {
	const V = 4;
	const edges = [
		[0, 1],
		[1, 2],
		[3, 1],
		[3, 2],
	];

	const adj = Array.from({ length: V }, () => []);

	for (let edge of edges) {
		let [u, v] = edge;
		adj[u].push(v);
	}

	topologicalSort(adj, V);
})();
