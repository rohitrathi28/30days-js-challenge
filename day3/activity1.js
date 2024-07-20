const num= 20;
if(num>0){
    console.log(`${num} is positive` );
}
else if(num<0){
    console.log(`${num} is negative` );
}
else{
    console.log("it is zero");
}

const num1= 20;
const num2= 50;
const num3= 40;
if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is gretes from ${num2} and ${num3} `);
    }
    else{
        console.log(`${num3} is gretes from ${num2} and ${num1} `);
    }

}
else{
    if(num2>num3){
        console.log(`${num2} is gretes from ${num1} and ${num3} `);
    }
    else{
        console.log(`${num3} is gretes from ${num2} and ${num1} `);
    }

}

