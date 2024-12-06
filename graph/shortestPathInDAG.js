class Graph {
	constructor(V) {
		this.v = V;
		this.edges = new Array(this.v);

		for (let i = 0; i < this.v; i++) {
			this.edges[i] = [];
		}
	}

	addEdges(edge) {
		let [u, v, w] = edge;
		this.edges[u].push({ v, w });
	}

	shortestPath(src) {
		let queue = [{ node: src, dist: 0 }];
		let distance = new Array(this.v).fill(Number.MAX_VALUE);

		while (queue.length > 0) {
			let { node, dist } = queue.shift();

			distance[node] = Math.min(distance[node], dist);

			for (let neighbor of this.edges[node]) {
				let { v, w } = neighbor;
				queue.push({ node: v, dist: w + dist });
			}
		}

		return distance;
	}
}

const n = 7;
const g = new Graph(n);
// const edges = [
// 	[0, 1, 2],
// 	[0, 4, 1],
// 	[4, 5, 4],
// 	[4, 2, 2],
// 	[1, 2, 3],
// 	[2, 3, 6],
// 	[5, 3, 1],
// ];
const edges = [
	[0, 4, 2],
	[0, 5, 3],
	[5, 4, 1],
	[4, 6, 3],
	[4, 2, 1],
	[6, 1, 2],
	[2, 3, 3],
	[1, 3, 1],
];

edges.forEach((e) => {
	g.addEdges(e);
});

const dist = g.shortestPath(0);

console.log(g);
