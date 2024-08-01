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