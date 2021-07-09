let readline = require("readline-sync");
let number = readline.question("Enter the single digit number: ");
let choice = parseInt(number);
switch(choice)
{
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    case 8:
        console.log("eight");
        break;
    case 9:
        console.log("nine");
        break;
    default:
        console.log("Invalid Number");
}
