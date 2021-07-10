//flipcoin gives head and tail
var head = 1;
var tail = 2;
var coin = Math.random() * 2;
var flip = Math.floor(coin)
//returns head
if(flip === 0)
{
    console.log("Head")
} 
//returns tail
else if(flip === 1)
{
    console.log("Tails")
}