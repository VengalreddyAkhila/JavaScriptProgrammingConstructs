//enter the place values as 1,10,100,.....
let readline = require("readline-sync");
let number = readline.question("Enter the numbers as 1,10,100,1000....: ");
let choice = parseInt(number);
switch(choice)
{
    case 1:
        console.log("unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Tenthousand");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("TenLakhs");
        break;
    case 10000000:
        console.log("Crore");
        break;    
    default:
        console.log("Invalid Number");
}

