import Node from "./node.js";
class LinkedList {
  constructor(firstNode = null) {
    this.firstNode = firstNode;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.firstNode) {
      this.firstNode = newNode;
      return;
    }
    let currentNode = this.firstNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    return;
  }
  prepend(value) {
    let newNode = new Node(value);
    if (!this.firstNode) {
      this.firstNode = newNode;
      return;
    }
    newNode.nextNode = this.firstNode;
    this.firstNode = newNode;
    return;
  }
  size() {
    let currentIndex = 0;

    if (!this.firstNode) {
      return currentIndex;
    }
    let currentNode = this.firstNode;
    currentIndex++;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return currentIndex;
  }
}

export default LinkedList;
