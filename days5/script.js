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



// function func1() {
//   console.log("hello")
// }


// const hof1 = (func1,numm)=>{
//   for (let i = 0; i < numm ; i++) {
//   func1()
  
//   }}

//   hof1(func1,5)


//   function first(name) {
//     // console.log(`Hello ${name}`);
//     return `Hello ${name}`;
//   }
  
//   function second(string) {
//     // console.log(`${string}, how are you?`);
//     return `${string}, how are you?`;
//   }
  
//   function functionHOF2(fn1, fn2, str) {
//     return fn1(fn2(str));
//   }
  
//   console.log(functionHOF2(first, second, `rohit`));

  const func1 = ()=>{
    console.log("Function 1");
}

const func2 = () => {
    console.log("Function 2");
}

const HigherOrderFunction2 = (fun1,fun2,value) =>{
    let res = 0;
    for(let i=1;i<=value;i++){
        fun1();
        res += i;
    }
    for(let i = 0;i<res;i++){
        fun2()
    }
}

HigherOrderFunction2(func1,func2,2)