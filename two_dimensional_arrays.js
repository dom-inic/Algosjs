// working and creating two dimensional arrays

let twod = [];

let rows = 5;

for (let i = 0; i < rows; ++i) {
  twod[i] = [];
}

// sample twodimensional array
// each row is going to represent weekly sales

const sales = [
  [700, 600, 800, 1000, 500, 1200, 1400],
  [400, 600, 1100, 2050, 500, 1200, 400],
  [800, 700, 800, 2000, 700, 1200, 2400],
  [900, 600, 500, 1000, 600, 1800, 900]
];

// calculating average and total weekly sales 

let total = 0;
let average = 0.0;

for (let row= 0; row < sales.length; ++row){
    for (let col = 0; col < sales[row].length; ++col){
        total += sales[row][col];
    }
    average = total / sales[row].length;
    console.log("week" + parseInt(row + 1) + " total sales"  +total+ "and average" + average.toFixed(2));
    total = 0
    average = 0.0
}


// concatenating words front and back to form one sentence
// in this approach we can use reduce and reduceRight
let words = ['i', "love", "data", "structures", "and", "algorithms"]

words.reduce((prevvalue, currvalue)=> {
    return prevvalue + " " + currvalue
})

words.reduceRight((prevvalue,currvalue)=> {
    return prevvalue + " " + currvalue
})

// grades object that stores a set of student grades in an object. 
// with a function for adding a grade and a function for displaying the student’s grade average.

function Grades(){
    this.datastore = [];
    this.add = add;
    this.average = average;

    function add(grade){
        return this.datastore.push(grade)
    }

    function average(){
        let total = 0;
        for (let i = 0; i < this.datastore.length; ++i){
            total += this.datastore[i];
        }
        return total / this.datastore.length
    }
}

let 


