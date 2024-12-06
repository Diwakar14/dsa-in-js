class Tree {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

const tr = new Tree();
tr.data = 0;
tr.left = new Tree(2, new Tree(3, null, null), null);
tr.right = new Tree(4, null, null);
console.log(tr);

function traverse(node) {
	console.log(node.data + "->");
	if (node.left) traverse(node.left);
	if (node.right) traverse(node.right);

	return;
}
traverse(tr);
