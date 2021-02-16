//3a: Declare the following variables
// a. A String named message with value ‘Coding is great’, then use
// console.log to print it out
let message = "Coding is great"
console.log(message) 

//3b: A Number named studentCount with value 0, then use console.log to print
// it out
let studentCount = 0
console.log(studentCount) 

//4. Update the declared variables in Exercise 3
// a. Change message into ‘Coding might not be easy, but still
// great’, then use console.log to print it out
message = "Coding might not be easy, but still great"
console.log(message) 

//4b. Change studentCount into total of the students in our class right now (16 for
// example), then use console.log to print it out
studentCount = 16
console.log(studentCount) 

//4c. After completing exercise a, change the message into lowercase, then use
// console.log to print it out
message = message.toLowerCase()
console.log(message)  

//4d. After completing exercise b, increase studentCount by 1, then use
// console.log to print it out
console.log(studentCount + 1) 

//5. Write a script to show user a nice message
alert("you look beautiful today") 

//6. Write a script to ask user about their name, and then say hi to them, say something nice
// to them if you want :)
let a6 = prompt("Hi there, your name please?")
alert ("Hi, "+ a6) 

//7. Write a script that ask 2 things from users, their first name and last name, then greet
// them with their full name
let a7 = prompt("Enter your last name")
let b7 = prompt("Enter your first name")
alert ("Hi "+ a7 + " " + b7) 

//8. Write a script that calculates the area of a square
let a8 = prompt("Enter side length of the square")
a8 = Number(a8)
alert("The square area is " + a8*a8)  

//9. Write a script that calculates the area of a circle
let a9 = prompt("Enter the radius of the circle")
a9 = Number(a9)
alert("The circle area is " + 3.14*a9*a9) 

//10. Write a script that converts Celsius ( 0 C) into Fahrenheit ( 0 F)
let a10 = prompt("Enter the temperature in Celius ")
a10 = Number(a10)
alert(a10 + " (C) = " + (1.8*a10+32) + "( F)") 
