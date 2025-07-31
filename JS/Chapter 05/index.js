//             CHAPTER 5

//QUESTION 1
var a = 3;
var b = 5;
var c = a + b;

document.writeln(
  "Sum of" + " " + a + " " + " and" + " " + b + " " + "is" + " " + c + "<br>"
);

//QUESTION 2
var c = 3;
var d = 5;
var e = a - b;

document.writeln(
  "Sub of" + " " + c + " " + " and" + " " + d + " " + "is" + " " + e + "<br>"
);

var f = 3;
var g = 5;
var h = a * b;

document.writeln(
  "mul of" + " " + f + " " + " and" + " " + g + " " + "is" + " " + h + "<br>"
);

var i = 3;
var j = 5;
var k = a / b;
document.writeln(
  "div of" + " " + i + " " + " and" + " " + j + " " + "is" + " " + k + "<br>"
);

var l = 3;
var m = 5;
var n = a % b;
document.writeln(
  "mod of" +
    " " +
    l +
    " " +
    " and" +
    " " +
    m +
    " " +
    "is" +
    " " +
    n +
    "<br><br>"
);

//Question 03
// a. Declare a variable
var number;

// b. Show the value after declaration
document.writeln("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number
number = 5;

// d. Show the initial value
document.writeln("Initial value: " + number + "<br>");

// e. Increment the variable
number++;

// f. Show the value after increment
document.writeln("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable
number = number + 7;

// h. Show the value after addition
document.writeln("Value after addition is: " + number + "<br>");

var j = 13; // initial value
j--; // decrement the value by 1

document.writeln("Value after decrement is: " + j + "<br>");

var remainder = j % 3; // get remainder
document.writeln("The remainder is " + remainder + "<br>");

// Question 4 !

var ticketPrice = 600;

var totalTickets = 5;

var totalCost = ticketPrice * totalTickets;

document.writeln(
  "Total Cost To Buy " +
    totalTickets +
    " " +
    "ticket to a movie is" +
    totalCost +
    "PKR. <br>"
);

// Question 5 !

var num = 4;

document.write("Table of " + num + "<br>");
document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br>");

// Question 6 !

var celsius = 30;

var farhenheit = (celsius * 9) / 5 + 32;
document.writeln(celsius + "°C is " + farhenheit + "°F <br>");

farhenheit = 60;
celsius = ((farhenheit - 32) * 5) / 9;
document.writeln(farhenheit + "°F is " + celsius + "°C <br><br>");

// Question 7 !

var item1Price = 350;
var item2Price = 600;
var item1Qty = 5;
var item2Qty = 9;
var shipping = 150;

var cartTotal = item1Price * item1Qty + item2Price * item2Qty + shipping;

document.writeln("Price of item 1 is " + item1Price + "<br>");
document.writeln("Quantity of item 1 is " + item1Qty + "<br>");
document.writeln("Price of item 2 is " + item2Price + "<br>");
document.writeln("Quantity of item 2 is " + item2Qty + "<br>");
document.writeln("Shipping Charges " + shipping + "<br>");
document.writeln("Total cost of your order is " + cartTotal + "<br><br>");

// Question 8 !

var totalMarks = 850;
var marksObtained = 498;
var percentage = (marksObtained / totalMarks) * 100;

document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + marksObtained + "<br>");
document.writeln("Percentage: " + percentage + "%<br><br>");

// Question 9 !

var dollars = 15;
var riyals = 35;
var totalPKR = dollars * 270.6 + riyals * 45;

document.writeln("Total Currency in PKR: " + totalPKR + "<br><br>");

// Question 10 !

var result = ((5 + 5) * 10) / 2;
document.writeln("Result: " + result + "<br><br>");

// Question 11 !

var currentYear = 2025;
var birthYear = 2007;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.writeln(
  "They are either " + age2 + " or " + age1 + " years old.<br><br>"
);

// Question 12 !

var radius = 10;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.writeln("Radius: " + radius + "<br>");
document.writeln("The circumference is " + circumference + "<br>");
document.writeln("The area is " + area + "<br><br>");

// Question 13 !

// var snack = "lays";
// var currentAge = 20;
// var maxAge = 65;
// var perDay = 4;
// var totalSnacks = (maxAge - currentAge) * 365 * perDay;

// document.write(
//   "You will need " +
//     totalSnacks +
//     " " +
//     snack +
//     " to last you until the ripe old age of " +
//     maxAge +
//     ".<br><hr>"
// );
