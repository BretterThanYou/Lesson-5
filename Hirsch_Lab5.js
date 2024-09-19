/*
Brett Hirsch
Sep 17, Objects
*/
console.log("Brett Hirsch")
console.log("\n ------ Example 1: defining an object ------")
// create an object named 'car'
const car ={
    type: "Fiat",
    model: 500,
    color: "white"
}
console.log(`The model of the car is ${car.model}`)

console.log("\n ------ Example 2: use of 'this' keyword in an object ------")
// create an object named 'person'
const person = {
    // defining properties
    firstname : "John",
    lastname : "Doe",
    id : 1234,

    //defining methods
    fullname : function(){
        return `${this.firstname} ${this.lastname}`
    }
}

// accessing method 'fullname'
console.log(person.fullname())

console.log("\n ------ Example 3: object construcctor using function ------")
function course(title, instructor, code, session, students){
    this.title = title;
    this.instructor = instructor;
    this.code = code,
    this.session = session,
    this.students = students
}
// set up values to the object
let course1 = new course("Javascript programming", "Wu", "ET712", "H1", 12)

// acessing properties
console.log(`The course ${course.title} has ${course.students} students`)

console.log("\n ------ Example 4: methods ------")
const myMath = {
    //defining methods
    square : function(num){
        return num*num
    },
    double : function (num){
        return num*2
    }
}

// accessing methods
let n = 3
let number1 = myMath.double(n)
let number2 = myMath.square(n)

// print result
console.log(`The double of number ${n} is ${number1}`)
console.log(`The square of ${n} is ${number2}`)

console.log("\n ------ Exercise ------")

const mycalculator = {
    message : "Welcome to my calculator",
    side : 2,
    area_square : function(){
        return this.side * this.side;
    },
    volume_square : function(){
        return this.side * this.side * this.side;
    }
};


let calc_area = mycalculator.area_square();
let calc_volume = mycalculator.volume_square(); 
let greeting = mycalculator.message;

console.log(`${mycalculator.message}`);
console.log(`The area of a square with side ${mycalculator.side} is ${calc_area}`); 
console.log(`The volume of a cube with side ${mycalculator.side} is ${calc_volume}`);

/*
Brett Hirsch
Sep 19, 2024
try-catch
*/

console.log("\n ------ Example 1: Try Catch ------")
// define a function to display a message in upper-case
function yell(message){
    console.log(message.toUpperCase().repeat(3))
}

try {
    //call the function
    yell(" Good morning ")
    yell(123)
}

catch(e){
    console.log(`ERROR! ${e}`)
}
finally{
    console.log("end of calling function yell()")
}
// after example
console.log("\n ------ lines after example 1 ------")

console.log("\n ------ Exercise ------")
// Define a Javascript function named 'dividenumbers' that takes two parameters, 'a' and 'b'
// The function should return the result of dividing 'a' by 'b'
// if the division is undefined, the function should return a message saying 'Error performing the division'
// use try-catch
function dividenumbers(a, b) {
    try {
        if (b === 0) {
            return 'Error performing the division';
        }
        return a / b;
    } catch (error) {
        return 'Error performing the division';
    }
}

console.log(dividenumbers(10,5))
console.log(dividenumbers(5,0))
