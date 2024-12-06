class Graph {
	constructor(V) {
		this.v = V;

		this.edges = new Array(this.v);
		for (let i = 0; i < this.v; i++) {
			this.edges[i] = [];
		}
	}

	addEdge(e) {
		let [u, v, cost] = e;
		this.edges[u].push({ dest: v, cost });
	}

	// Using Bread First Traversal
	// We can alos use Dijkstra to find the result.
	// For using Dijkstra we also need to store the distance travelled.

	cheapestFlight(src, dst, k) {
		let queue = [{ v: src, cost: 0, stops: 0 }];

		while (queue.length > 0) {
			let { v, cost, stops } = queue.shift();

			if (v == dst && k == stops - 1) {
				return cost;
			}

			for (let neighbor of this.edges[v]) {
				queue.push({
					v: neighbor.dest,
					cost: cost + neighbor.cost,
					stops: stops + 1,
				});
			}
		}

		return -1;
	}
}

// const graph = [
// 	[0, 1, 100],
// 	[1, 2, 100],
// 	[2, 0, 100],
// 	[1, 3, 600],
// 	[2, 3, 200],
// ];
// const n = 4;
// const src = 0;
// const dst = 3;
// const k = 3;

const graph = [
	[0, 1, 100],
	[1, 2, 100],
	[0, 2, 500],
];
const n = 3;
const src = 0;
const dst = 2;
const k = 1;

const g = new Graph(n);
graph.forEach((e) => {
	g.addEdge(e);
});

const cost = g.cheapestFlight(src, dst, k);
console.log(cost);
