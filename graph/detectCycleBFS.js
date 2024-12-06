const graph = [[], [2], [1, 3], [2]];

function bfs(graph, visited) {
	let queue = [{ node: 0, parent: -1 }];

	while (queue.length > 0) {
		let { node, parent } = queue.shift();

		for (let neighbours of graph[node]) {
			if (!visited.has(neighbours)) {
				visited.add(neighbours);
				queue.push({ node: neighbours, parent: node });
			} else {
				if (node != parent) {
					return true;
				}
			}
		}
	}

	return false;
}

function detectCycle(graph) {
	bfs(graph, new Set()) && console.log("Has Cycle");
}

detectCycle(graph);
