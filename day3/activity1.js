//act1
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

//act2
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

//act3

const marks = 70 ;
switch (true) {

    case (marks>90):
        console.log("A");
        break;
    case (marks>80):
        console.log("B");
        break;
    case (marks>70):
        console.log("C");
        break;
    case (marks>60):
        console.log("D");
        break;
    

    default:
        console.log("F");
        break;
}

//ACT4

const numm =22;
numm%2==0 ? console.log("evev") :  console.log("odd");