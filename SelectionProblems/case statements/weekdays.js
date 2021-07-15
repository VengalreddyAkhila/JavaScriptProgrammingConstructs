//case statement weekdays
let readline = require("readline-sync");
let number = readline.question("Enter the weekday numbers: ");
let choice = parseInt(number);
switch(choice)
{    
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;    
    default:
        console.log("Invalid Number");
}
