function heapPush(heap, data) {
	// Add Element at the end of the tree
	heap.push(data);

	let curr = heap.length - 1;

	// Check if its complie with Heap properties.
	while (curr > 0) {
		let parent = Math.floor((curr - 1) / 2);

		if (heap[parent] > heap[curr]) {
			[heap[curr], heap[parent]] = [heap[parent], heap[curr]];
			curr = parent;
		} else {
			break;
		}
	}
}

function heapPop(heap) {
	const last = heap.length - 1;
	[heap[last], heap[0]] = [heap[0], heap[last]];

	let removedKey = heap.pop();

	let curr = 0;

	// check the correct position
	while (2 * curr + 1 < heap.length) {
		const leftIndex = 2 * curr + 1;
		const rightIndex = 2 * curr + 2;

		const minChildIndex =
			rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]
				? rightIndex
				: leftIndex;

		if (heap[minChildIndex] < heap[curr]) {
			[heap[curr], heap[minChildIndex]] = [heap[minChildIndex], heap[curr]];

			curr = minChildIndex;
		} else {
			break;
		}
	}
	return removedKey;
}

// Create Heap using HeapPop

function Heapify(arr) {
	let heap = [];

	for (let ele of arr) {
		heapPush(heap, ele);
	}
	return heap;
}

function procolateDown(heap, index) {
	let curr = index;

	while (2 * curr + 1 < heap.length) {
		const leftIndex = 2 * curr + 1;
		const rightIndex = 2 * curr + 2;
		const minChildIndex =
			rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]
				? rightIndex
				: leftIndex;

		if (heap[minChildIndex] < heap[curr]) {
			[heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]];
			curr = minChildIndex;
		} else {
			break;
		}
	}
}

function heapOptimized(heap) {
	// for (let ele of heap) {
	// 	procolateDown(heap, ele);
	// }

	// return heap;

	const last = Math.floor(heap.length / 2 - 1);
	for (let i = 0; i <= last; i++) {
		procolateDown(heap, i);
	}
	return heap;
}

const arr = [3, 56, 1, 78, 22, 90, 54, 67, 23];
const heapOpt = heapOptimized(arr);
console.log(heapOpt);

// const heap = Heapify(arr);
// console.log(heap);

// const removedKey = heapPop(heap);
// console.log(removedKey);
// console.log(heap);
