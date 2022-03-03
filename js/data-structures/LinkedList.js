class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
  }

  // Insert at Head
  insertAtHead = function (value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return true;
  };

  // Insert at End
  insertAtEnd = function (value) {
    const node = new Node(value);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
    return true;
  };

  // Insert Before Element
  insertBeforeElement = function (value, before) {
    const node = new Node(value);
    let current = this.head;

    // If no node in Linked List
    if (current === null) {
      return false;
    }

    // If head node is desired node
    if (current.data === before) {
      return this.insertAtHead(value);
    }
    current = current.next;
    let shadow = this.head;
    while (current != null && current.data != before) {
      current = current.next;
      shadow = shadow.next;
    }

    if (!current) {
      return false;
    }

    shadow.next = node;
    node.next = current;
    return true;
  };

  // Insert after a certain element
  insertAfterElement = function (value, after) {
    const node = new Node(value);
    let current = this.head;
    // If after is at head node
    if (current.data === after) {
      current = current.next;
      this.head.next = node;
      node.next = current;
      return true;
    }

    current = current.next;
    let shadow = this.head;
    while (current.next != null && current.data != after) {
      current = current.next;
      shadow = shadow.next;
    }

    if (!current.next && current.data != after) {
      return false;
    }

    current = current.next;
    shadow = shadow.next;
    shadow.next = node;
    node.next = current;
    return true;
  };

  // Edit Elements with specific data value
  editElement = function (newValue, previousValue) {
    let current = this.head;
    while (current != null) {
      if (current.data === previousValue) {
        current.data = newValue;
        current = current.next;
      } else {
        current = current.next;
      }
    }
  };

  // Delete Head Node
  popFromHead = function () {
    if (!this.head) {
      return false;
    }

    const node = this.head;
    this.head = this.head.next;
    node.next = null;
    return node;
  };

  // Delete Last Node
  popFromEnd = function () {
    if (!this.head) {
      return false;
    }

    let current = this.head;
    if (current.next === null) {
      const node = current;
      this.head = null;
      return node;
    }

    let shadow = this.head;
    current = current.next;
    while (current.next != null) {
      current = current.next;
      shadow = shadow.next;
    }
    const node = current;
    shadow.next = null;
    return node;
  };
  // Delete Node with a specifc data value

  // Print Linked List
  print = function () {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  };

  //Get the middle element of Linked List
  //The argument evenSecondMiddle checks if the user wants the 2nd middle in case of even number of nodes
  getMiddle = function (evenSecondMiddle = false) {
    let cur = this.head;
    let jump = this.head;
    while (jump != null && jump.next != null) {
      cur = cur.next;
      jump = jump.next;
      jump = jump.next;
    }

    if (jump === null && evenSecondMiddle === true) {
      cur = cur.next;
    }

    return cur;
  };

  //Reversing the Linked List
  reverse() {
    if (!this.head) {
      return true;
    }

    if (!this.head.next) {
      return true;
    }
    //Need Three references
    let backward = this.head;
    let middle = backward.next;
    let foreward = middle.next;

    this.head.next = null;

    while (middle && middle.next != null) {
      middle.next = backward;
      backward = middle;
      middle = foreward;
      foreward = foreward && foreward.next;
    }

    middle.next = backward;
    this.head = middle;
    return true;
  }
}

let list = new LinkedList(30);

list.insertAtHead(25);
list.insertAtHead(20);
list.insertAtHead(15);
list.insertAtHead(10);
list.insertAtHead(5);
list.insertAtHead(4);
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(2);
list.insertAtHead(1);
list.insertAtHead(0.5);
list.print();
console.log("After Reversing");
list.reverse();
list.print();
