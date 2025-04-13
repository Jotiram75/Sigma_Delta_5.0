//functions

function hello(){
    console.log("Hello");
}

// hello();
// hello();
// hello();
// hello();
// hello();

function printPoem(){
    console.log("Twinkle Twinkle ,Little Star");
    console.log("How I Wonder what you are");
}

// printPoem();

function rollDice(){
    let random =Math.floor(Math.random()*6)+1;
    console.log(random);
}

// rollDice();

// functional Arguments
function printname(name){
    console.log(name);
}

printname("Joti");

function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printinfo("Joti",23);

function sum(a,b){
    console.log(a+b);
}
sum(2,1);
sum(3,5);
sum(5,6);

//practice set
function average(a,b,c){
    console.log((a+b+c)/3);
}
average(1,2,3);

//practice set
function table(n){
    for(let i=1;i<=10;i++){
        l=i*n;
        console.log(`${n}*${i}=${l}`);
    }
}
table(2);

//return
 function sub(a,b){
    return a-b;
 }
 console.log(sub(2,3));


 //practice set
 function sumn(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
 }
 console.log(sumn(10));