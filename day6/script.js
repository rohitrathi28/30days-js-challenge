let num = [1,2,3,4,5]
console.log(num);
console.log(num[0]);
console.log(num[4]);

num.push(6)
console.log(num);
num.pop()
console.log(num);


num.shift()
console.log(num);
num.unshift(9)
console.log(num);


const even = num.filter((numm)=>{
    return numm%2==0
})
console.log(even);


const double = num.map((numm)=>{
    return numm*2
})

console.log(double);


const myTotal = num.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);



// for (let i = 0; i < num.length ; i++) {

//     console.log(num[i]);
    
// }

num.forEach(function (w) {
    console.log(w);
    
})