class Queue {
  constructor() {
    this.datastore = [];
  }
  enqueue(element) {
    // add an element to the end of a queue using push
    this.datastore.push(element);
  }

  dequeue() {
    // removes an element from the front of a queue
    return this.datastore.shift();
  }

  front() {
    return this.datastore[0];
  }

  back() {
    return this.datastore[this.datastore.length - 1];
  }

  toString(){
    let retStr = "";
    for(let i =0; i < this.datastore.length; ++i){
      retStr = this.datastore[i] + "\n"
    }
    return retStr;
  }

  empty(){
    if (this.datastore.length == 0){
      return true;
    }
    return false;
  }


}
