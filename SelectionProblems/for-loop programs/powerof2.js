//enter the number and find power of 2
var readlineSync = require("readline-sync");
var num = readlineSync.question("Enter number:");
var temp=1;
for(var i=2;i<num;i++)
{
    temp=temp*num;
}
console.log(" power of 2's: "+num+" is "+temp);