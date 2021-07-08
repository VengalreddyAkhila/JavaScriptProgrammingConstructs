//Printing the 5 random 3 digit values of max and min
let maxValue = 0;
let minValue = 1000;
   for (i = 1; i <= 5; i++)
    {    
        num = Math.floor(Math.random() * 999);         
        console.log(num);
        //prints the max value
        if (maxValue < num)
        {
            maxValue = num;
        }
        //prints the min value
        if(minValue > num)
        {
            minValue = num;
        }
        
    } 
    //prints the max and min value  
      console.log("Maximum Value  :" + maxValue);
      console.log("Minimum Value  :" + minValue);