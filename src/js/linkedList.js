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
  head() {
    if (!this.firstNode) {
      return null;
    }
    return this.firstNode;
  }
  tail() {
    if (!this.firstNode) {
      return null;
    }
    let currentNode = this.firstNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  at(index) {
    if (!this.firstNode) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.firstNode;
    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      } else {
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
    }
    return null;
  }
  pop() {
    if (!this.firstNode) {
      return;
    }
    if (!this.firstNode.nextNode) {
      this.firstNode = null;
    }

    let currentNode = this.firstNode;
    let previousNode = this.firstNode;
    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
    return;
  }
  contains(value) {
    if (!this.firstNode) {
      return false;
    }
    let currentNode = this.firstNode;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }
}

export default LinkedList;
