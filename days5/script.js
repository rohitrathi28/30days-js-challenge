function oddeven(num){
    if(num%2==0){
        return `${num} is even`
    }
    else{
         return `${num} is odd`
    }
}

console.log(oddeven(6))


function Square(num) {
    return num * num;
  }
  
  // Activity 2 : Function Expression
  
  // Task-3
  
  let checkMax = function (num1, num2) {
    if (num1 > num2) {
      return `${num1} is maximum`;
    } else {
      return `${num2} is maximum`;
    }
  };



  let concatStr = function (str1, str2) {
    return `${str1} ${str2}`;
  }
  console.log(concatStr("rohit", "rathi"))


  const sum = (a, b) => {
    return a + b;
}

const answer = sum(10, 20);
console.log(answer); //output:- 30

//Task-6:- write an arrow function to check if a string contains a specific character return a boolean value. 

const containsCharacter = (str, char) => {
    return str.includes(char);
}

const stringAt = containsCharacter("Good, morning!", "m");

function greeting(name, age = 20) {
  return `Hello, ${name}! You age ${age} years old.`;
}

const greeting1 = greeting("Sam", 22);
console.log(greeting1); 