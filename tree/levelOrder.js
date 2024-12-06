class Tree {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

const tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.left.right = new Tree(5);
// tree.right.left = new Tree(6);
// tree.right.right = new Tree(7);

function levelOrder(root) {
	const ans = [];
	if (root == null) return ans;

	const q = [root];

	while (q.length > 0) {
		let levels = [];
		for (let i = 0; i < q.length; i++) {
			const current = q.shift();
			levels.push(current.data);

			if (current.left != null) q.push(current.left);
			if (current.right != null) q.push(current.right);
		}

		ans.push(levels);
	}

	console.log(ans);
}

levelOrder(tree);
