/*

AVL TREES

RULES FOR BINARY TREES
1. Each Node can have 0, 1 or max two children
2. Every Left children of a node are lesser than the node
3. Every Right children of a node are greater than the node

RULES FOR AVL TREES
1. Tree should be balanced

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value);
      }

      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value);
      }

      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }

  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;
    if (leftHeight > rightHeight + 1) {
      const leftRightHeight = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left.left ? this.left.left.height : 0;
      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }
      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      const rightLeftHeight = this.right.left ? this.right.left.height : 0;
      const rightRightHeight = this.right.right ? this.right.right.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }
      this.rotateRR();
    }
  }

  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }

  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left.height + 1;
    } else {
      this.height = this.right.height + 1;
    }
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Inserting a Node
  insertNode(value) {
    if (!this.root) {
      const node = new Node(value);
      console.log(node);

      this.root = node;
      return;
    } else {
      this.root.insert(value);
    }
  }

  // Deleting a Node

  // In Order tree traversal printing
  printInOrder(node) {
    if (node === null) {
      return;
    }

    this.printInOrder(node.left);
    console.log(node.value);
    this.printInOrder(node.right);
  }

  //Pre order traversal printing
  printPreOrder(node) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    this.printPreOrder(node.left);
    this.printPreOrder(node.right);
  }

  printPostOrder(node) {
    if (node === null) {
      return;
    }
    this.printPostOrder(node.left);
    this.printPostOrder(node.right);
    console.log(node.value);
  }

  // get root node
  getRoot() {
    return this.root;
  }
}

let tree = new AVLTree();
tree.insertNode(1);
tree.insertNode(2);
tree.insertNode(3);
tree.insertNode(4);
tree.insertNode(5);
tree.insertNode(6);
tree.insertNode(7);
tree.insertNode(9);
tree.insertNode(10);
tree.printInOrder(tree.getRoot());
