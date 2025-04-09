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



// arrays

let students = ["Joti","Ram","Shinde","Shivaji"];
console.log(students);

let num=[1,2,3,4,5,6,7,8,9,10];
console.log(num);

let info = ["Jotiram",23,"Neware","SBPCOE"];
console.log(info);

let empty=[];
console.log(empty);

let name=["Rohit","Shivaji","Shinde"];
name[0]="Shivaji"; // replaces first element of array
console.log(name[0]);


name.push("Joti");
console.log(name); // adds element to end of array

name.pop();
console.log(name); // removes last element of array

name.shift(); // removes first element of array
console.log(name); // removes first element of array

console.log(name.length); // length of array


let month=["january","july","march","august"];
console.log(month);

month.shift();
console.log(month); // removes first element of array
month[1]="june";
console.log(month); // replaces second element of array
month[2]="march";
month.push("august");
console.log(month); // adds element to end of array

month.unshift("jan"); // adds element to beginning of array
console.log(month); // adds element to beginning of array


month.indexOf("jan");
console.log(month.indexOf("jan")); // returns index of element in array

let cont=name.concat(month); // concatenates two arrays
console.log(cont); // concatenates two arrays

cont.reverse(); // reverses array
console.log(cont); // reverses array

console.log(cont.slice); // slices array
console.log(cont.slice(1,3)); // slices array
console.log(cont.slice(1)); // slices array

console.log(cont.slice(-1)); // slices array
console.log(cont.slice(-2)); // slices array