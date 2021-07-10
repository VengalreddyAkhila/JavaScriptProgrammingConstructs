//check number is prime or not
let readline = require("readline-sync");
let n = readline.question("Enter the  number: ");
function Prime(n)
{
    if (n <= 1)
        return false;  
    for (let i = 2; i < n; i++)
    
        if (n % i == 0) 
        return false;       
        return true;               
}
console.log(Prime(n));