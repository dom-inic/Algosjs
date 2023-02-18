const fs = require('fs')

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

  toString() {
    let retStr = "";
    for (let i = 0; i < this.datastore.length; ++i) {
      retStr = this.datastore[i] + "\n";
    }
    return retStr;
  }

  empty() {
    if (this.datastore.length == 0) {
      return true;
    }
    return false;
  }
}

//  Assigning Partners at a Square Dance

// dancer object

class Dancer {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

}

const getDancers =  (males, females) =>{
  let names = read("dancers.txt").split("\n");
  for (let i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
  }
  for (let i = 0; i < names.length; ++i) {
    let dancer = names[i].split(" ");
    let sex = dancer[0];
    let name = dancer[1];
    if (sex == "F") {
      females.enqueue(new Dancer(name, sex));
    } else {
      males.enqueue(new Dancer(name, sex));
    }
  }
}

const dance = (males, females) =>{
  console.log("The dance partners are: \n");
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    putstr("Female dancer is: " + person.name);
    person = males.dequeue();
    console.log(" and the male dancer is: " + person.name);
  }
}

const maleDancers = new Queue();
const femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
  console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
  console.log(maleDancers.front().name + " is waiting to dance.");
}
