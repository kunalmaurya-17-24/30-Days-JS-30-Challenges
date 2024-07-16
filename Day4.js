//Activity 1

// //Task 1
for(var i=1;i<=10;i++){
    console.log(i);
}

// //Task 2
for(var i=0;i<=10;i++) {
    console.log(`5 X ${i} = ${i*5}`)
}

//Activity 2

//Task 3
var i = 0;
var sum = 0;
while(i <= 5){
    sum += i;
    i++;
}
console.log(sum);

//Task 4

var printNumber = 10;
while(printNumber>=1){
    console.log(printNumber);
    printNumber--;
}

//Activity 3

//Task 5

var num=1;
do {
    console.log(num);
    num++;
} while (num<=5);

// //Task 6
 var numberto = 5;
 var fact = 1;
 var i=numberto;
 do {
     fact = fact*i;
     i--; 
    } while (i>0);
console.log(`Factorial of ${numberto} is ${fact}`)


//Activity 4

//Task 7
for (var i = 0; i < 5; i++) {
    var line = "";
    for (var j = 0; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}


//Activity 5

// //Task 8
for(var i=1;i<=10;i++){
    if(i == 5) continue;
    console.log(i)
}

//Tasl 9
for(var i=1;i<=10;i++){
    if(i == 7) break;
    console.log(i);
}