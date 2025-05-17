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
