class Graph {
	constructor(V) {
		this.v = V;
		this.adj = new Array(V);

		for (let i = 0; i < this.v; i++) {
			this.adj[i] = [];
		}
	}

	addEdge(u, v) {
		this.adj[u].push(v);
	}

	topologicalSort() {
		let inDegree = new Array(this.v).fill(0);
		for (let i = 0; i < this.v; i++) {
			for (let edge of this.adj[i]) {
				inDegree[edge]++;
			}
		}

		let queue = [];
		for (let v = 0; v < this.v; v++) {
			if (inDegree[v] === 0) {
				queue.push(v);
			}
		}

		let order = [];

		while (queue.length > 0) {
			let current = queue.shift();
			order.push(current);

			for (let neighbor of this.adj[current]) {
				if (--inDegree[neighbor] === 0) {
					queue.push(neighbor);
				}
			}
		}

		if (order.length != this.v) {
			console.log("Contains Cycle.");
			return;
		}

		console.log(order);
	}
}

const g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

g.topologicalSort();
