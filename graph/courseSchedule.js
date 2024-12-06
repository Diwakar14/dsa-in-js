class Graph {
	constructor(V) {
		this.V = V;
		this.adj = new Array(this.V);

		for (let i = 0; i < this.V; i++) {
			this.adj[i] = [];
		}
	}

	addEdge(u, v) {
		this.adj[u - 1].push(v - 1);
	}

	courseSchedule() {
		let inDegree = new Array(this.V).fill(0);

		for (let i = 0; i < this.V; i++) {
			for (let edge of this.adj[i]) {
				inDegree[edge]++;
			}
		}

		let queue = [];
		for (let v = 0; v < this.V; v++) {
			if (inDegree[v] === 0) {
				queue.push(v);
			}
		}

		let sort = [];
		while (queue.length > 0) {
			let current = queue.shift();
			sort.push(current);

			for (let neighbor of this.adj[current]) {
				if (--inDegree[neighbor] === 0) {
					queue.push(neighbor);
				}
			}
		}

		if (sort.length != this.V) {
			console.log("Not Possible to schedule");
			return;
		}

		console.log("Possible to schedule: " + sort);
	}
}

const g = new Graph(4);
// g.addEdge(1, 0);
// g.addEdge(2, 1);
// g.addEdge(3, 2);
// g.courseSchedule();

g.addEdge(1, 2);
g.addEdge(4, 3);
g.addEdge(2, 4);
g.addEdge(4, 1);
g.courseSchedule();
