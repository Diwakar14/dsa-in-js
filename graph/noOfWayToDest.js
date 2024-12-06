class Graph {
	constructor(V) {
		this.v = V;
		this.edges = new Array(this.v);

		for (let i = 0; i < this.v; i++) {
			this.edges[i] = [];
		}
	}

	addEdges(e) {
		let [u, v, c] = e;
		this.edges[u].push({ dest: v, cost: c });
		this.edges[v].push({ dest: u, cost: c });
	}

	noOfWaysToDest(src, dest) {
		let queue = [src];
		let minPath = new Array();

		while (queue.length > 0) {
			let current = queue.shift();
		}
	}
}

const graph = [
	[0, 6, 7],
	[0, 1, 2],
	[1, 2, 3],
	[1, 3, 3],
	[6, 3, 3],
	[3, 5, 1],
	[6, 5, 1],
	[2, 5, 1],
	[0, 4, 5],
	[4, 6, 2],
];

const n = graph.length,
	m = graph[0].length;
const v = 7;

const g = new Graph(v);

graph.forEach((e) => {
	g.addEdge(e);
});

const ways = g.noOfWaysToDest(0, v - 1);

console.log(ways);
