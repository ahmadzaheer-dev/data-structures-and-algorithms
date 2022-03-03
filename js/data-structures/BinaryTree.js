/*

BINARY SEARCH TREE

RULES FOR BINARY TREES
1. Each Node can have 0, 1 or max two children
2. Every Left children of a node are lesser than the node
3. Every Right children of a node are greater than the node

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  //Inserting a new node using recursion
  insertNode(root, value) {
    if (root === null) {
      this.root = new Node(value);
      return;
    }
    if (value < root.value) {
      if (root.left) {
        return this.insertNode(root.left, value);
      } else {
        root.left = new Node(value);
        return;
      }
    } else if (value > root.value) {
      if (root.right) {
        return this.insertNode(root.right, value);
      } else {
        root.right = new Node(value);
        return;
      }
    } else {
      return;
    }
  }

  // Deleting a Node

  //Breadth First Traversal
  breadthFirstTraversal() {
    let traversal = [];
    let queue = [];
    queue.unshift(this.root);
    while (queue.length > 0) {
      let node = queue.pop();
      traversal.push(node.value);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    return traversal;
  }

  // In Order tree traversal printing
  inOrderTraversal(node, traversal = []) {
    if (node === null) {
      return traversal;
    } else {
      this.inOrderTraversal(node.left, traversal);
      traversal.push(node.value);
      this.inOrderTraversal(node.right, traversal);
    }
    return traversal;
  }

  //Pre order traversal printing
  preOrderTraversal(node, traversal = []) {
    if (node === null) {
      return traversal;
    } else {
      traversal.push(node.value);
      this.preOrderTraversal(node.left, traversal);
      this.preOrderTraversal(node.right, traversal);
    }
    return traversal;
  }

  postOrderTraversal(node, traversal = []) {
    if (node === null) {
      return traversal;
    }
    this.postOrderTraversal(node.left, traversal);
    this.postOrderTraversal(node.right, traversal);
    traversal.push(node.value);
    return traversal;
  }

  // get root node
  getRoot() {
    return this.root;
  }
}

let tree = new BinaryTree();
tree.insertNode(tree.getRoot(), 6);
tree.insertNode(tree.getRoot(), 4);
tree.insertNode(tree.getRoot(), 3);
tree.insertNode(tree.getRoot(), 5);
tree.insertNode(tree.getRoot(), 8);
tree.insertNode(tree.getRoot(), 7);
tree.insertNode(tree.getRoot(), 9);
// tree.printInOrder(tree.getRoot());

let traversal = tree.inOrderTraversal(tree.getRoot());
console.log("Inorder", traversal);
let traversal2 = tree.preOrderTraversal(tree.getRoot());
console.log("Pre Order", traversal2);
let traversal3 = tree.postOrderTraversal(tree.getRoot());
console.log("Post Order", traversal3);
