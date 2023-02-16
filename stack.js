class Stack {
  constructor() {
    this.datastore = [];
    this.top = 0;
  }

  push(element) {
    this.datastore[this.top++] = element;
  }

  pop() {
    this.datastore[--this.top];
  }

  peek() {
    return this.datastore[this.top - 1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }
}

// solving palindromes using stack
// sample palis ; racecar, dad, 1001

const palindrome = (word) => {
  let s = new Stack();
  for (let i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }

  let rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  }
  return false;
};

// recursion using stack;

function fact(n) {
  var s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}
print(factorial(5));
print(fact(5));
