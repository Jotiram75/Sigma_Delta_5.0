let a="          Hello              ";
console.log(a);

console.log("Hello World");

let b=a.trim(); // removes whitespace from both sides of a string
console.log(b);
console.log(a);

let msg = "Ilove";
console.log(msg.indexOf("love")); // length of string

console.log(msg.indexOf("e"));
console.log(msg.indexOf("z"));

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());

//method chaining

let newa = a.trim().toUpperCase(); // removes whitespace from both sides of a string and converts to uppercase
console.log(newa);

//slice

console.log(msg.slice(1,3));
console.log(msg.slice(3));

console.log(msg.slice(-1));


//replace

let msgnew = "I love JavaScript";
console.log(msgnew.replace("JavaScript", "Python")); // replaces first occurrence of string
console.log(msgnew.repeat(2));


//Practice set 1

let msg2="help!";
console.log(msg2.trim().toUpperCase());