// An implementation of a List ADT

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains; // initializes an empty array to store list elements this.clear = clear;
}
