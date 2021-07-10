//print the factorial of a number
let readline = require("readline-sync");
let n = readline.question("Enter the  number: ");
function Factorial(n)
{
    if (n == 1)
    {
        return 1;
    }
    else{
        return n * Factorial(n - 1);
    }
}
console.log(Factorial(n));