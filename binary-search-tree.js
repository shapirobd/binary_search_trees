class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	//                       8
	//                  5         11
	//               3    6     9
	//
	//
	//
	//
	//
	//
	//

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}

		let current = this.root;
		while (true) {
			if (val < current.val) {
				if (current.left === null) {
					current.left = new Node(val);
					return this;
				} else {
					current = current.left;
				}
			} else if (val > current.val) {
				if (current.right === null) {
					current.right = new Node(val);
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}

		function insertNode(current, nodeToAdd) {
			if (nodeToAdd.val < current.val) {
				if (!current.left) {
					current.left = nodeToAdd;
					return;
				} else {
					insertNode(current.left, nodeToAdd);
				}
			} else if (nodeToAdd.val > current.val) {
				if (!current.right) {
					current.right = nodeToAdd;
					return;
				} else {
					insertNode(current.right, nodeToAdd);
				}
			}
		}

		const nodeToAdd = new Node(val);
		insertNode(this.root, nodeToAdd);
		return this;
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let current = this.root;
		while (true) {
			if (!current) return;
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				return current;
			}
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {
		function findByVal(val, current) {
			if (!current) return;
			if (val === current.val) return current;
			if (val < current.val) {
				current = current.left;
			} else {
				current = current.right;
			}
			return findByVal(val, current);
		}

		return findByVal(val, this.root);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder() {
		const arr = [];

		function traverse(node, arr) {
			arr.push(node.val);
			if (node.left) traverse(node.left, arr);
			if (node.right) traverse(node.right, arr);
		}

		traverse(this.root, arr);
		return arr;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {
		const arr = [];

		function traverse(node, arr) {
			if (node.left) traverse(node.left, arr);
			arr.push(node.val);
			if (node.right) traverse(node.right, arr);
		}

		traverse(this.root, arr);
		return arr;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {
		const arr = [];

		function traverse(node, arr) {
			if (node.left) traverse(node.left, arr);
			if (node.right) traverse(node.right, arr);
			arr.push(node.val);
		}

		traverse(this.root, arr);
		return arr;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {
		const valsArr = [this.root.val];
		const nodesToVisit = [this.root];

		while (nodesToVisit.length) {
			let current = nodesToVisit.shift();
			if (current.left) {
				valsArr.push(current.left.val);
				nodesToVisit.push(current.left);
			}
			if (current.right) {
				valsArr.push(current.right.val);
				nodesToVisit.push(current.right);
			}
		}

		return valsArr;
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
