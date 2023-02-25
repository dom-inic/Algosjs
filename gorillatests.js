// Two players decided to play a game and stored the instances in which they won in an array
// for example if player one won a single game the win is indicated with a one on the array
// if player two won the win is indicated with a two.
// A sample array would be as follows [1,1,2,1,2,1]; in this array player one would be the winner
// so the test is to write a function which check the winner if given the array.
// it should also indicate if at any time their is a draw. 


// Implementation

const checkWinner = arr => {
    let count1 = 0;
    let count2 = 0;
    for (let i =0; i < arr.length; i++){
        if (arr[i] === 1){
            count1++;
        }
        else if (arr[1] === 2){
            count2++;
        }
    }
    if (count1 > count2){
        return console.log("Player one won with" +count1)
    }
    else if(count2 > count1){
        return console.log("Player two won with" +count2)
    }
    else if (count1 === count2){
        return console.log("stand down its a draw, they both got" +count1)
    }
}

// test cases 
const arrone = [1,1,2,1,1]
const arrtwo = [1,2,2,1,2]
const arrthree = [1,1,2,2]

checkWinner(arrone);
checkWinner(arrtwo);
checkWinner(arrthree);