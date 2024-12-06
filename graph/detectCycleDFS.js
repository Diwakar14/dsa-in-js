const graph = [[], [2], [1, 3], [2]];

function dfs(graph, src, parent, visited) {
	visited.add(src);

	for (let node of graph[src]) {
		if (!visited.has(node)) {
			if (dfs(graph, node, src, visited) == true) {
				return true;
			}
		} else if (parent != node) {
			return true;
		}
	}

	return false;
}

const result = dfs(graph, 0, -1, new Set());
console.log(result);
