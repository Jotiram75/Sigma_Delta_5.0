//object literals
console.log("Object Literals");
const student = {
    name:"Joti",
    age:23,
    marks:63,
    city:"Akluj"

};
console.log(student);

//post/threads
const post={
    username:"@jotiram75",
    content:"This is my first Post",
    likes:100,
    repost:5,
    tags:["@jotiram550","joti"]
};
console.log(post);

//get values
console.log(student["marks"]);
console.log(student.name);

//Add/update

student.city="Solapur";
console.log(student);
student.gender="Female";
console.log(student);

student.marks="A";
console.log(student);
student.marks=[50,90,80];
console.log(student);

delete student.city;
console.log(student);

delete student.marks;
console.log(student);
