console.log("Hello Javascript");
console.log("Hello Jotiram");
let a = 10;
let b = 20;
console.log(a + b);
let d =50;
console.log(d);

let pencilprice=10;
let eraserprice=5;
output="The total price is: "+(pencilprice+eraserprice) +" Rupees";
console.log(output);

output=`total price is:${pencilprice+eraserprice} Rupees`;
console.log(output);


//Arithmetic Operators

let x=10;
let y=20;
let z=x+y;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y); // exponentiation operator
console.log(x++); // post increment operator
console.log(x--); // post decrement operator
console.log(++x); // pre increment operator
console.log(--x); // pre decrement operator
console.log(x+=y); // x=x+y
console.log(x-=y); // x=x-y

//operator
let a1=10;
let b1=20;
let c1=30;  
console.log(a1<b1); //less than operator
console.log(a1>b1); //greater than operator
console.log(a1<=b1); //less than or equal to operator
console.log(a1>=b1); //greater than or equal to operator
console.log(a1==b1); //equal to operator
console.log(a1!=b1); //not equal to operator
console.log(a1===b1); //strict equal to operator
console.log(a1!==b1); //strict not equal to operator
console.log(a1==c1); //equal to operator
console.log(a1!=c1); //not equal to operator


//conditional statements
console.log("before if statement ");
let j= 13;
if(j>=18){
    console.log("You are eligible to vote");
    console.log("You are eligible to drive");

}
console.log("after if statement ");



//traffic light example

let color="green";

if(color=="red"){
    console.log("Stop. Color is red");
}

if (color=="yellow"){
    console.log("Start. Color is yellow");
}

if(color=="green"){
    console.log("Go. Color is green");
}