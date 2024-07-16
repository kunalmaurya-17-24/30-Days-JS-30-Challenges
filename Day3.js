//Activity 1

//Task 1
var a = 2024;
if(a>0) console.log("positive")
    else if (a==0) console.log("zero")
        else console.log("negative")

//Task 2
var age = 24;
if(age>=18) console.log("Eligible to vote")
    else console.log("You are not Eligible to vote")

//Activity 2

//Task 3
var one = 8;
var two = 13;
var three = 17;
if(one>two && one>three) console.log("one is largest");
    else if(two>one && two>three) console.log("two is largest");
        else console.log("three is largest");

//Activity 4

//Task 4

switch (5) {
    case 0:
      day = "Sunday";
      console.log(day);
      break;
    case 1:
      day = "Monday";
      console.log(day);
      break;
    case 2:
       day = "Tuesday";
       console.log(day);
      break;
    case 3:
      day = "Wednesday";
      console.log(day);
      break;
    case 4:
      day = "Thursday";
      console.log(day);
      break;
    case 5:
      day = "Friday";
      console.log(day);
      break;
    case 6:
      day = "Saturday";
      console.log(day);
  }

//Task 5
var A;
switch (A) {
    case A:
      marks = "above 90";
      console.log(marks);
      break;
    case B:
      marks = "between 80-90";
      console.log(marks);
      break;
    case C:
       marks = "between 60 - 79";
       console.log(marks);
      break;
    case D:
      marks = "between 34-59";
      console.log(marks);
      break;
    case F:
      marks = "fail";
      console.log(marks);
      break;

  }

//Activity 4

//Task 6

var isEven = 17;
console.log(isEven % 2 == 0 ? "Even" : "Odd");

//Activity 5

//Task 7
var year = 2024;
if(year%4 == 0 && year%100 !=0) console.log("Leap Year")