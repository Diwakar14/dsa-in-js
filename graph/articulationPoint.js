function findArticulationPoint(n, connections) {
	let graph = createGraph(n, connections);
	let disc = { times: new Array(n).fill(-1), dfsOrder: 0 };
	let low = new Array(n).fill(0);
	let articulationPoints = [];

	for (let i = 0; i < n; i++) {
		if (disc.times[i] == -1) {
			dfsArticulationPoint(graph, 0, -1, disc, low, articulationPoints);
		}
	}

	return articulationPoints;
}

function dfsArticulationPoint(
	graph,
	start,
	parent,
	disc,
	low,
	articulationPoints
) {
	disc.times[start] = disc.dfsOrder++;
	low[start] = disc.times[start];
	let children = 0;

	for (let adjNode of graph[start]) {
		if (adjNode == parent) continue;

		if (disc.times[adjNode] == -1) {
			children++;

			dfsArticulationPoint(
				graph,
				adjNode,
				start,
				disc,
				low,
				articulationPoints
			);
			low[start] = Math.min(low[start], low[adjNode]);

			if (parent != -1 && disc.times[start] <= low[adjNode]) {
				articulationPoints.push(start);
			}
		} else {
			low[start] = Math.min(disc.times[adjNode], low[start]);
		}
	}

	if (children > 1 && parent == -1) {
		articulationPoints.push(start);
	}
}

function createGraph(n, connections) {
	let graph = new Array(n).fill().map(() => new Array());

	for (const connection of connections) {
		let [u, v] = connection;
		graph[u].push(v);
		graph[v].push(u);
	}

	return graph;
}

let g3 = new Array();
// g3.push([0, 1]);
// g3.push([1, 2]);
// g3.push([2, 0]);
// g3.push([1, 3]);
// g3.push([1, 4]);
// g3.push([1, 6]);
// g3.push([3, 5]);
// g3.push([4, 5]);

// g3.push([0, 1]);
// g3.push([1, 2]);
// g3.push([2, 3]);

g3.push([1, 0]);
g3.push([0, 2]);
g3.push([2, 1]);
g3.push([0, 3]);
g3.push([3, 4]);

const result = findArticulationPoint(5, g3);
console.log(result);
