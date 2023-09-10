//built in data type 
let username : string
let age : number
let isActive : boolean

//union data type
let reference : string | number

username ="rakib"
age = 25
isActive = true
reference = "ac-"+Math.floor(Math.random() * 1000)
console.log(reference)


//array data-type 
let fruites : string[]
fruites = ['apple','mango','goava']
console.log(fruites)

let marks : number[]
marks = [25,45,50,35]
console.log(marks)

let mixed : any[]
mixed = ['rakib',true,24]
console.log(mixed)

//union way
let stringOrNumber : (string | number)[]
stringOrNumber = ['rakib',22]

//tupel way
let tupleStringOrNumber : [string,number]
tupleStringOrNumber = ['riyad',22]


//void
function hello() :void {
    console.log('hello world')
}

//number return 
function sum(a : number, b:number) : number {
    return a+b
}

hello()

sum(10,20) //30



