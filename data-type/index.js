//built in data type 
var username;
var age;
var isActive;
//union data type
var reference;
username = "rakib";
age = 25;
isActive = true;
reference = "ac-" + Math.floor(Math.random() * 1000);
console.log(reference);
//array data-type 
var fruites;
fruites = ['apple', 'mango', 'goava'];
console.log(fruites);
var marks;
marks = [25, 45, 50, 35];
console.log(marks);
var mixed;
mixed = ['rakib', true, 24];
console.log(mixed);
//union way
var stringOrNumber;
stringOrNumber = ['rakib', 22];
//tupel way
var tupleStringOrNumber;
tupleStringOrNumber = ['riyad', 22];
//void
function hello() {
    console.log('hello world');
}
//number return 
function sum(a, b) {
    return a + b;
}
hello();
sum(10, 20); //30
