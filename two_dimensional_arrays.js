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

let studentGrades = new Grades()

studentGrades.add(40);
studentGrades.add(60);
studentGrades.add(40);
studentGrades.add(80);
studentGrades.add(70);

studentGrades.average();


// creating a two dimensional array better  approach 

const matrix = (numrows, numcols, ...values) => {
    let arr = [];
    for (let i = 0; i < numrows; ++i){
        let columns = [];
        for (let j =0; j < numcols; ++j){
            for (let arg of values){
                columns[j] = arg;
            }
        }
        arr[i] = columns;
    }
    return arr;
}

// modifying to take in a two dimensional array
class weekTemps {
    constructor() {
        this.datastore = [];
        this.addWeeks = addWeeks;
        this.average = average;
        this.addData = addData;
        this.addValue = addValue;


        function addWeeks(weeks) {
            for (let i =0; i < weeks; ++i ){
                this.datastore[i] = [];
            }
            return this.datastore;
        }

        function addData(week, ...values){
            if (!this.datastore[week]){
                this.datastore[week] = []
            }
            values.forEach((value, col)=> {
                this.addValue(week, col, value);
            });
            return this.datastore;

        }

        function addValue(week,col,value){
            if (!this.datastore[week]){
                this.datastore[week] = [];
            }
            this.datastore[week][col] = value
        }

        function getMonthlyAverage(){
            
        }

        function average() {
            let total = 0;

            for (let i = 0; i < this.datastore.length; ++i) {
                total += this.datastore[i];
            }
            return total / this.datastore.length;
        }
    }
}

class singleWord {
    constructor() {
        this.datastore = [];
        }

        addWord(word) {
            this.datastore.push(word);
        }

        sentence() {
            return this.datastore.reduce((prevvalue, currvalue) => {
                return prevvalue + " " + currvalue;
            });
        }
}

class TwoDimArray {
    constructor() {
        this.datastore = [];
    }

    addRow(numRows) {
        for (let i = 0; i < numRows; i++) {
            this.datastore[i] = [];
        }
        return this.datastore;
    }

    addValues(row, ...values) {
        if (!this.datastore[row]) {
            this.datastore[row] = [];
        }
        values.forEach((value, col) => {
            this.addValue(row, col, value);
        });
        return this.datastore;
    }

    addValue(row, col, value) {
        if (!this.datastore[row]) {
            this.datastore[row] = [];
        }
        return this.datastore[row][col] = value;
    }

    getValue(row, col) {
        return this.datastore[row][col];
    }
}











