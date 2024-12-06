const dict = ["baa", "abcd", "abca", "cab", "cad"];

const edges = [];

for (let i = 0; i < dict.length - 1; i++) {
	for (let j = 0; j < dict[i].length; j++) {
		if (dict[i][j] != dict[i + 1][j]) {
			edges.push({ u: dict[i][j], v: dict[i + 1][j] });
			break;
		}
	}
}

console.log(edges);

const V = 4;
const graph = {};

edges.forEach((e) => {
	if (graph[e.u]) graph[e.u].push(e.v);
	else graph[e.u] = [e.v];
});

console.log(graph);

function topologicalSort(graph, V) {
	let inDegree = new Array(V).fill(0);
	for (let i = 0; i < V; i++) {
		for (let edge of graph[i]) {
			inDegree[edge]++;
		}
	}

	let queue = [];
	for (let i = 0; i < V; i++) {
		if (inDegree[i] === 0) {
			queue.push(i);
		}
	}

	let sort = [];
	while (queue.length > 0) {
		let curr = queue.shift();
		sort.push(curr);

		for (let neighbor of graph[curr]) {
			if (--inDegree[neighbor]) {
				queue.push(neighbor);
			}
		}
	}

	if (sort.length != V) {
		console.log("Contains Cylcle");
		return;
	}

	console.log(sort);
}
