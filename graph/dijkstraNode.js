class Graph {
	constructor(V) {
		this.V = V;

		this.edges = new Array(V);

		for (let i = 0; i < V; i++) {
			this.edges[i] = new Array();
		}
	}

	addEdge(u, v, w) {
		this.edges[u].push([v, w]);
		this.edges[v].push([u, w]);
	}

	shortestPath(src) {
		let pq = [];

		let dist = new Array(V).fill(Number.MAX_VALUE);

		pq.push([0, src]);
		dist[src] = 0;

		while (pq.length > 0) {
			const [w, u] = pq.shift();

			for (let i = 0; i < this.edges[u].length; i++) {
				let v = this.edges[u][i][0];
				let w = this.edges[u][i][1];

				if (dist[v] > dist[u] + w) {
					dist[v] = dist[u] + w;

					pq.push([dist[v], v]);
					pq.sort((a, b) => {
						if (a[0] == b[0]) return a[1] - b[1];
						return a[0] - b[0];
					});
				}
			}
		}

		console.log(dist);
	}
}

let V = 9;
let g = new Graph(V);

// making above shown graph
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

// Function call
g.shortestPath(0);
