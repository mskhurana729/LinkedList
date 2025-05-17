import LinkedList from "./js/linkedList.js";
let list1 = new LinkedList();
list1.append("hello");
list1.append("hell1");

console.log(list1);

let list2 = new LinkedList();
list2.prepend("sir");
// console.log(list2);
list1.prepend("sir");
list1.prepend("sir2");

console.log(list1.size());
console.log(list1.tail());
console.log(list1.head());
console.log(list1.at(1));
list1.pop();
// console.log(list1);
console.log(list1.contains("hell1"));
console.log(list1.contains("hello"));
