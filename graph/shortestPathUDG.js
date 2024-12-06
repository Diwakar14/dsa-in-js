class Graph {
	constructor(V) {
		this.V = V;
		this.edges = new Array(this.V);

		for (let i = 0; i < this.V; i++) {
			this.edges[i] = [];
		}
	}

	addEdges(u, v) {
		this.edges[u].push(v);
		this.edges[v].push(u);
	}

	findShortestPath(src) {
		let queue = [{ node: src, dist: 0 }];
		let visited = new Set();
		let distance = new Array(this.V);

		while (queue.length > 0) {
			let { node, dist } = queue.shift();

			if (visited.has(node)) continue;
			visited.add(node);

			distance[node] = dist;

			for (let neighbor of this.edges[node]) {
				queue.push({ node: neighbor, dist: dist + 1 });
			}
		}

		return distance;
	}
}

const edges = [
	[0, 1],
	[0, 3],
	[3, 4],
	[4, 5],
	[5, 6],
	[1, 2],
	[2, 6],
	[6, 7],
	[7, 8],
	[6, 8],
];

let n = 9,
	m = 10;
const g = new Graph(n);

edges.forEach((e) => {
	g.addEdges(e[0], e[1]);
});

const dist = g.findShortestPath(0);

console.log(g);
