//read a number and display palce values
let readline = require("readline-sync");
let number = readline.question("Enter the single digit number: ");
if (number == 1)
console.log("Unit");
if (number == 10) 
console.log("Ten");
else if (number == 100) 
console.log("Hundred");
else if (number == 1000) 
console.log("Thousand");
else if (number == 10000) 
console.log("TenThousand");
else if (number == 100000)
console.log("Lakh");
else if (number == 1000000 ) 
console.log("Ten Lakhs");
else if (number == 10000000) 
console.log("Crore");
else if(number == 100000000)
console.log("Ten Crores");
else
console.log("Invalid Number");